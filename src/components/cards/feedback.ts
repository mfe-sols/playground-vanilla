import { el } from '../dom';

export const buildFeedbackCard = () =>
  el(
    'section',
    { className: 'ds-card ds-stack-3 ds-anim-fade-in' },
    el('h2', { className: 'ds-h4', text: 'Feedback' }),
    el('div', { className: 'ds-alert ds-alert--success' }, el('span', { className: 'ds-alert__icon', text: '✓' }), el('div', { text: 'Success message' })),
    el('div', { className: 'ds-progress-circular', attrs: { 'aria-label': 'Loading' } },
      el('span', { className: 'ds-progress-circular__ring' }),
      el('span', { className: 'ds-progress-circular__value' })
    ),
    el('div', { className: 'ds-skeleton', attrs: { style: 'height: 16px; width: 160px;' } })
  );
