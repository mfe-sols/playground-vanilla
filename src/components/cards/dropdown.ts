import { el } from '../dom';

export const buildDropdownCard = () => {
  const trigger = el('button', {
    className: 'ds-btn ds-btn--secondary ds-btn--md',
    text: 'Open menu',
    attrs: { type: 'button', 'data-js': 'dropdown-trigger' },
  });
  const content = el(
    'div',
    { className: 'ds-dropdown__content', attrs: { hidden: '', 'data-js': 'dropdown-content' } },
    el(
      'div',
      { className: 'ds-menu mt-2' },
      el('button', { className: 'ds-menu-item', text: 'Edit', attrs: { type: 'button' } }),
      el('button', { className: 'ds-menu-item', text: 'Duplicate', attrs: { type: 'button' } }),
      el('div', { className: 'ds-menu-separator' }),
      el('button', { className: 'ds-menu-item', text: 'Archive', attrs: { type: 'button' } })
    )
  );

  return el(
    'section',
    { className: 'ds-card ds-stack-3 ds-anim-fade-in' },
    el('h2', { className: 'ds-h4', text: 'Dropdown' }),
    el('div', { className: 'ds-dropdown' }, trigger, content)
  );
};
