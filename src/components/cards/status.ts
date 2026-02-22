import { el } from '../dom';

export const buildStatusCard = () => {
  const apiBase = el('p', { className: 'ds-body2', attrs: { 'data-js': 'api-base' } });
  const apiStatus = el('p', { className: 'ds-body2', attrs: { 'data-js': 'api-status' } });
  const shared = el('p', { className: 'ds-body2', attrs: { 'data-js': 'shared-message' } });

  const updateButton = el('button', {
    className: 'ds-btn ds-btn--secondary ds-btn--md',
    text: 'Update Shared Message',
    attrs: { type: 'button', 'data-js': 'update-shared' },
  });
  const toastButton = el('button', {
    className: 'ds-btn ds-btn--ghost ds-btn--md',
    text: 'Show toast',
    attrs: { type: 'button', 'data-js': 'show-toast' },
  });

  return el(
    'section',
    { className: 'ds-card ds-stack-3 ds-anim-fade-in' },
    el('h1', { className: 'ds-h3', text: 'Status' }),
    apiBase,
    apiStatus,
    shared,
    el(
      'div',
      { className: 'ds-inline-3 inline-flex items-center gap-2' },
      el('button', {
        className: 'ds-btn ds-btn--primary ds-btn--md ds-anim-scale-in',
        text: 'Vanilla UI Button',
        attrs: { type: 'button' },
      }),
      updateButton,
      toastButton
    )
  );
};
