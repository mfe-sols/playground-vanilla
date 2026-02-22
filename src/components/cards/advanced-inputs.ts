import { el } from '../dom';

export const buildAdvancedInputsCard = () =>
  el(
    'section',
    { className: 'ds-card ds-stack-3 ds-anim-fade-in' },
    el('h2', { className: 'ds-h4', text: 'Advanced Inputs' }),
    el('div', { className: 'ds-slider__labels' }, el('span', { text: '0' }), el('span', { text: '100' })),
    el(
      'div',
      { className: 'ds-slider', attrs: { 'data-ds-slider': '' } },
      el('div', { className: 'ds-slider__track' }, el('div', { className: 'ds-slider__range', attrs: { 'data-ds-slider-range': '' } })),
      el('div', { className: 'ds-slider__tooltip', attrs: { 'data-ds-slider-tooltip': '' } }),
      el('div', { className: 'ds-slider__thumb', attrs: { 'data-ds-slider-thumb': '', style: 'width: 16px; height: 16px;' } })
    ),
    el('div', { className: 'ds-slider__labels' }, el('span', { text: '0' }), el('span', { text: '100' })),
    el(
      'div',
      { className: 'ds-slider ds-slider--range', attrs: { 'data-ds-slider': '' } },
      el('div', { className: 'ds-slider__track' }),
      el('div', { className: 'ds-slider__range', attrs: { 'data-ds-slider-range': '' } }),
      el('div', { className: 'ds-slider__tooltip', attrs: { 'data-ds-slider-tooltip-start': '' } }),
      el('div', { className: 'ds-slider__tooltip', attrs: { 'data-ds-slider-tooltip-end': '' } }),
      el('div', { className: 'ds-slider__thumb ds-slider__thumb--range', attrs: { 'data-ds-slider-thumb-start': '', style: 'width: 16px; height: 16px;' } }),
      el('div', { className: 'ds-slider__thumb ds-slider__thumb--range', attrs: { 'data-ds-slider-thumb-end': '', style: 'width: 16px; height: 16px;' } })
    ),
    el(
      'div',
      { className: 'ds-autocomplete', attrs: { 'data-js': 'autocomplete' } },
      el('input', { className: 'ds-input', attrs: { placeholder: 'Search...', 'data-ds-autocomplete-input': '' } }),
      el(
        'div',
        { className: 'ds-autocomplete__list', attrs: { 'data-ds-autocomplete-list': '' } },
        el('button', { className: 'ds-autocomplete__item', text: 'Option A', attrs: { type: 'button', 'data-ds-autocomplete-item': '' } }),
        el('button', { className: 'ds-autocomplete__item', text: 'Option B', attrs: { type: 'button', 'data-ds-autocomplete-item': '' } }),
        el('button', { className: 'ds-autocomplete__item', text: 'Option C', attrs: { type: 'button', 'data-ds-autocomplete-item': '' } })
      )
    )
  );
