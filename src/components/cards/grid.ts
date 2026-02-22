import { el } from '../dom';

export const buildGridCard = () =>
  el(
    'section',
    { className: 'ds-card ds-stack-3 ds-anim-fade-in' },
    el('h2', { className: 'ds-h4', text: 'Grid Layout' }),
    el(
      'div',
      { className: 'ds-grid-2 gap-2' },
      el('div', { className: 'ds-card', text: 'Grid 2 — Item A' }),
      el('div', { className: 'ds-card', text: 'Grid 2 — Item B' })
    ),
    el(
      'div',
      { className: 'ds-grid-3 gap-2' },
      el('div', { className: 'ds-card', text: 'Grid 3 — Item A' }),
      el('div', { className: 'ds-card', text: 'Grid 3 — Item B' }),
      el('div', { className: 'ds-card', text: 'Grid 3 — Item C' })
    ),
    el(
      'div',
      { className: 'ds-grid-4' },
      el('div', { className: 'ds-card', text: 'Grid 4 — Item A' }),
      el('div', { className: 'ds-card', text: 'Grid 4 — Item B' }),
      el('div', { className: 'ds-card', text: 'Grid 4 — Item C' }),
      el('div', { className: 'ds-card', text: 'Grid 4 — Item D' })
    ),
    el(
      'div',
      { className: 'ds-grid-6' },
      ...['1', '2', '3', '4', '5', '6'].map((label) =>
        el('div', { className: 'ds-card', text: label })
      )
    )
  );
