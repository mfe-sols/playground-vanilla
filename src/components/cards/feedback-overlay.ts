import { el } from '../dom';

export const buildFeedbackOverlayCard = () => {
  const tooltipButton = el('button', {
    className: 'ds-btn ds-btn--ghost ds-btn--md',
    text: 'Tooltip',
    attrs: { type: 'button', 'data-js': 'tooltip-trigger' },
  });

  const tooltip = el('div', {
    className: 'ds-tooltip ds-tooltip--top',
    text: 'Tooltip content',
    attrs: { hidden: '', 'data-js': 'tooltip' },
  });

  return el(
    'section',
    { className: 'ds-card ds-stack-3 ds-anim-fade-in' },
    el('h2', { className: 'ds-h4', text: 'Feedback + Overlays' }),
    el(
      'div',
      { className: 'ds-inline-3' },
      el('button', {
        className: 'ds-btn ds-btn--primary ds-btn--md',
        text: 'Show toast',
        attrs: { type: 'button', 'data-js': 'show-toast' },
      }),
      el('button', {
        className: 'ds-btn ds-btn--secondary ds-btn--md',
        text: 'Open dialog',
        attrs: { type: 'button', 'data-js': 'open-dialog' },
      }),
      el('div', { className: 'relative' }, tooltipButton, tooltip)
    ),
    el('div', { className: 'ds-progress' }, el('div', { className: 'ds-progress__bar', attrs: { style: 'width: 60%' } })),
    el(
      'div',
      { className: 'ds-snackbar', attrs: { role: 'status', 'aria-live': 'polite' } },
      'Snackbar message',
      el('div', { className: 'ds-snackbar__actions' }, el('button', { className: 'ds-snackbar__action', text: 'Undo', attrs: { type: 'button' } }))
    )
  );
};
