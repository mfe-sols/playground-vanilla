import { el } from '../dom';

export const buildHeader = () =>
  el(
    'header',
    { className: 'ds-appbar' },
    el(
      'div',
      { className: 'ds-toolbar inline-flex items-center gap-2' },
      el('div', { className: 'ds-toolbar__title', text: 'UI Kit Playground' }),
      el(
        'div',
        { className: 'ds-toolbar__actions' },
        el('span', { className: 'ds-caption', text: 'Vanilla' })
      )
    )
  );
