import { el } from '../dom';

export const buildTypographyCard = () =>
  el(
    'section',
    { className: 'ds-card ds-stack-3 ds-anim-fade-in' },
    el('h2', { className: 'ds-h4', text: 'Typography' }),
    el(
      'div',
      { className: 'ds-stack-2' },
      el('div', { className: 'ds-h1', text: 'Heading 1' }),
      el('div', { className: 'ds-h2', text: 'Heading 2' }),
      el('div', { className: 'ds-h3', text: 'Heading 3' }),
      el('div', { className: 'ds-h4', text: 'Heading 4' }),
      el('div', { className: 'ds-h5', text: 'Heading 5' }),
      el('div', { className: 'ds-h6', text: 'Heading 6' })
    ),
    el(
      'div',
      { className: 'ds-stack-2' },
      el('div', { className: 'ds-subtitle1', text: 'Subtitle 1' }),
      el('div', { className: 'ds-subtitle2', text: 'Subtitle 2' }),
      el('div', {
        className: 'ds-body1',
        text: 'Body 1 — The quick brown fox jumps over the lazy dog.',
      }),
      el('div', {
        className: 'ds-body2',
        text: 'Body 2 — The quick brown fox jumps over the lazy dog.',
      }),
      el('div', { className: 'ds-caption', text: 'Caption text' }),
      el('div', { className: 'ds-overline', text: 'Overline' }),
      el('div', { className: 'ds-button-text', text: 'Button text' }),
      el('a', { className: 'ds-link', text: 'Link style', attrs: { href: '#' } }),
      el('code', { className: 'ds-mono', text: 'Monospace sample' })
    )
  );
