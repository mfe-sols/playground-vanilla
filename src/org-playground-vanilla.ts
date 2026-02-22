import './styles.css';
import { bindPlayground } from './components';
import {
  defineDesignSystem,
  ensureTokens,
  ensureThemeToggle,
  initThemeMode
} from '@mfe-sols/ui-kit';
import { initMfeErrorReporter } from './mfe-error-reporter';

let appElement: HTMLElement | null = null;
let cleanup: (() => void) | null = null;
let themeCleanup: (() => void) | null = null;

initMfeErrorReporter('@org/playground-vanilla');

const PARTIALS = [
  'header',
  'status',
  'typography',
  'grid',
  'timeline',
  'tabs',
  'datagrid',
  'tree',
  'feedback-overlay',
  'form-inputs',
  'editor',
  'inline-editor',
  'dropdown',
  'data-display',
  'navigation',
  'advanced-inputs',
  'feedback',
  'dialog'
];

const resolveScriptBase = (): string | null => {
  if (typeof document === 'undefined') return null;
  const current = document.currentScript;
  if (current instanceof HTMLScriptElement && current.src) {
    try {
      const url = new URL(current.src);
      url.pathname = url.pathname.replace(/[^/]+$/, '');
      url.search = '';
      url.hash = '';
      return url.toString();
    } catch {
      return null;
    }
  }
  const scripts = Array.from(document.scripts || []);
  const match = scripts.find(
    (script) =>
      script instanceof HTMLScriptElement && script.src.includes('org-playground-vanilla.js')
  );
  if (!match) return null;
  try {
    const url = new URL(match.src);
    url.pathname = url.pathname.replace(/[^/]+$/, '');
    url.search = '';
    url.hash = '';
    return url.toString();
  } catch {
    return null;
  }
};

const SCRIPT_BASE = resolveScriptBase();

const getAssetBase = (): string => {
  if (SCRIPT_BASE) return SCRIPT_BASE;
  if (typeof window !== 'undefined') {
    return `${window.location.origin}/`;
  }
  return '/';
};

const fetchPartial = async (baseUrl: string, name: string) => {
  const urlObj = new URL(`partials/${name}.html`, baseUrl);
  if (SCRIPT_BASE && urlObj.origin !== new URL(SCRIPT_BASE).origin) {
    throw new Error(`Blocked cross-origin partial for ${name}`);
  }
  const res = await fetch(urlObj.toString(), { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`Failed to load ${name} partial`);
  }
  const contentType = res.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) {
    throw new Error(`Unexpected content-type for ${name} partial`);
  }
  return res.text();
};

const applyHtml = (root: Element, html: string) => {
  const template = document.createElement('template');
  template.innerHTML = html;
  template.content.querySelectorAll('script, iframe, object, embed').forEach((node) => {
    node.remove();
  });
  root.replaceChildren(template.content);
};

declare global {
  interface Window {
    playgroundVanilla?: {
      bootstrap: () => Promise<void>;
      mount: (props?: { domElement?: HTMLElement | null }) => Promise<void>;
      unmount: () => Promise<void>;
    };
    __POWERED_BY_SINGLE_SPA__?: boolean;
    API_BASE_URL?: string;
  }
}

export async function bootstrap() {
  return Promise.resolve();
}

export async function mount(props?: { domElement?: HTMLElement | null }) {
  const domElement =
    (props && props.domElement) ||
    document.getElementById('playground-vanilla-root') ||
    (document.querySelector('application[name="@org/playground-vanilla"]') as HTMLElement | null) ||
    (document.querySelector('[data-app="@org/playground-vanilla"]') as HTMLElement | null);

  if (!domElement) {
    return;
  }

  defineDesignSystem({ tailwind: true });
  ensureTokens();

  const existing = domElement.querySelector('.vanilla-app');
  if (existing && existing.parentNode) {
    existing.parentNode.removeChild(existing);
  }

  appElement = document.createElement('div');
  appElement.className = 'vanilla-app';
  appElement.innerHTML = `
    <section class="ds-container ds-stack-6 px-10 py-2" data-sv-root>
      <div class="ds-card ds-stack-2">
        <p class="ds-overline">Loading UI</p>
        <p class="ds-body2">Fetching partials...</p>
      </div>
    </section>
  `;

  domElement.appendChild(appElement);
  const storageKey = "ds-theme:playground-vanilla";
  initThemeMode(appElement, storageKey);
  themeCleanup = ensureThemeToggle(appElement, "Toggle theme", {
    target: appElement,
    storageKey
  });
  const root = appElement.querySelector('[data-sv-root]');
  if (!root) {
    cleanup = bindPlayground(appElement);
    return;
  }

  const baseUrl = getAssetBase();
  try {
    const chunks = await Promise.all(PARTIALS.map((name) => fetchPartial(baseUrl, name)));
    applyHtml(root, chunks.join(''));
  } catch {
    applyHtml(
      root,
      `
      <div class="ds-card ds-stack-2">
        <p class="ds-overline">Fallback</p>
        <p class="ds-body2">Partials not available. Please check /partials/* in build output.</p>
      </div>
    `
    );
  }

  cleanup = bindPlayground(appElement);
}

export async function unmount() {
  if (appElement && appElement.parentNode) {
    appElement.parentNode.removeChild(appElement);
  }
  if (cleanup) {
    cleanup();
    cleanup = null;
  }
  if (themeCleanup) {
    themeCleanup();
    themeCleanup = null;
  }
  appElement = null;
}

if (typeof window !== 'undefined') {
  window.playgroundVanilla = {
    bootstrap,
    mount,
    unmount
  };
}

if (!window.__POWERED_BY_SINGLE_SPA__) {
  const root = document.getElementById('playground-vanilla-root');
  if (root) {
    mount({ domElement: root });
  }
}
