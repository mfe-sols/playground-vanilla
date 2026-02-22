import { el } from '../dom';

const timelineItem = (
  marker: string,
  time: string,
  title: string,
  description: string,
  active: boolean
) =>
  el(
    'div',
    { className: 'ds-timeline-item' },
    el('div', {
      className: active ? 'ds-timeline-marker ds-timeline-marker--active' : 'ds-timeline-marker',
      text: marker,
    }),
    el(
      'div',
      { className: 'ds-timeline-content' },
      el('div', { className: 'ds-timeline-time', text: time }),
      el('div', { className: 'ds-timeline-title', text: title }),
      el('div', { className: 'ds-timeline-description', text: description })
    )
  );

export const buildTimelineCard = () =>
  el(
    'section',
    { className: 'ds-card ds-stack-3 ds-anim-fade-in' },
    el('h2', { className: 'ds-h4', text: 'Timeline' }),
    el(
      'div',
      { className: 'ds-timeline gap-2' },
      timelineItem(
        '1',
        'Today · 09:30',
        'Order confirmed',
        'We have received your payment and confirmed the order.',
        true
      ),
      timelineItem(
        '2',
        'Today · 11:00',
        'Preparing shipment',
        'Items are being packed and assigned to a courier.',
        false
      ),
      timelineItem(
        '3',
        'Tomorrow · 08:45',
        'Out for delivery',
        'The package is on its way to your address.',
        false
      )
    )
  );
