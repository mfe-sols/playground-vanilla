import { svg, svgPath } from './dom';

export const chevronIcon = () =>
  svg(
    { viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': 'true' },
    svgPath({
      d: 'M5 7.5L10 12.5L15 7.5',
      stroke: 'currentColor',
      'stroke-width': '1.6',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    })
  );

export const caretIcon = () =>
  svg(
    { viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': 'true' },
    svgPath({
      d: 'M7.5 5L12.5 10L7.5 15',
      stroke: 'currentColor',
      'stroke-width': '1.6',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    })
  );

export const calendarIcon = () =>
  svg(
    { viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': 'true' },
    svgPath({
      d: 'M6.5 3.5V5.5M13.5 3.5V5.5M4.5 7.5H15.5M5.5 6.5H14.5C15.0523 6.5 15.5 6.94772 15.5 7.5V15.5C15.5 16.0523 15.0523 16.5 14.5 16.5H5.5C4.94772 16.5 4.5 16.0523 4.5 15.5V7.5C4.5 6.94772 4.94772 6.5 5.5 6.5Z',
      stroke: 'currentColor',
      'stroke-width': '1.5',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    })
  );
