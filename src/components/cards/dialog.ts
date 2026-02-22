import { el } from '../dom';

export const buildDialog = () =>
  el(
    'div',
    { attrs: { 'data-js': 'dialog-wrapper' } },
    el('div', { className: 'ds-modal-backdrop', attrs: { hidden: '', 'data-js': 'dialog-backdrop' } }),
    el(
      'div',
      { className: 'ds-modal', attrs: { hidden: '', 'data-js': 'dialog' } },
      el('div', { className: 'ds-modal-header', text: 'Confirm' }),
      el('div', { className: 'ds-modal-body', text: 'Are you sure you want to continue?' }),
      el(
        'div',
        { className: 'ds-modal-footer' },
        el('button', { className: 'ds-btn ds-btn--secondary ds-btn--md', text: 'Cancel', attrs: { type: 'button', 'data-js': 'dialog-cancel' } }),
        el('button', { className: 'ds-btn ds-btn--primary ds-btn--md', text: 'Confirm', attrs: { type: 'button', 'data-js': 'dialog-confirm' } })
      )
    )
  );
