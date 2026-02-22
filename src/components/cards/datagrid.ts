import { el } from '../dom';
import { calendarIcon, chevronIcon } from '../icons';

export const buildDatagridCard = () => {
  const table = el(
    'table',
    { className: 'ds-datagrid__table', attrs: { 'data-js': 'datagrid' } },
    el(
      'thead',
      { className: 'ds-datagrid__head' },
      el(
        'tr',
        {},
        el('th', {
          className: 'ds-datagrid__th',
          text: 'Name',
          attrs: { 'data-ds-sortable': '', 'data-ds-field': 'name' },
        }),
        el('th', {
          className: 'ds-datagrid__th',
          text: 'Status',
          attrs: { 'data-ds-sortable': '', 'data-ds-field': 'status' },
        })
      )
    ),
    el(
      'tbody',
      {},
      el(
        'tr',
        {},
        el('td', { className: 'ds-datagrid__td', text: 'Project A', attrs: { 'data-ds-field': 'name' } }),
        el('td', { className: 'ds-datagrid__td', text: 'Active', attrs: { 'data-ds-field': 'status' } })
      ),
      el(
        'tr',
        {},
        el('td', { className: 'ds-datagrid__td', text: 'Project B', attrs: { 'data-ds-field': 'name' } }),
        el('td', { className: 'ds-datagrid__td', text: 'Paused', attrs: { 'data-ds-field': 'status' } })
      )
    )
  );

  const inlineDatepicker = el('div', { className: 'ds-datepicker', attrs: { 'data-js': 'datepicker-inline' } });
  const inlineRange = el('div', { className: 'ds-datepicker', attrs: { 'data-js': 'datepicker-range-inline' } });

  const datepickerDropdown = el(
    'div',
    { className: 'ds-datepicker-menu', attrs: { 'data-js': 'datepicker-dropdown' } },
    el(
      'div',
      { className: 'ds-datepicker-trigger' },
      el('input', {
        className: 'ds-input ds-datepicker-input',
        attrs: { 'data-ds-datepicker-input': '', placeholder: 'Pick a date', readonly: '' },
      }),
      el('span', { className: 'ds-datepicker-icon', attrs: { 'aria-hidden': 'true' } }, calendarIcon())
    ),
    el('div', { className: 'ds-datepicker-panel', attrs: { 'data-ds-datepicker-panel': '', hidden: '' } })
  );

  const dateRangeDropdown = el(
    'div',
    { className: 'ds-datepicker-menu', attrs: { 'data-js': 'date-range-dropdown' } },
    el(
      'div',
      { className: 'ds-datepicker-trigger' },
      el('input', {
        className: 'ds-input ds-datepicker-input',
        attrs: { 'data-ds-datepicker-input': '', placeholder: 'Select range', readonly: '' },
      }),
      el('span', { className: 'ds-datepicker-icon', attrs: { 'aria-hidden': 'true' } }, calendarIcon())
    ),
    el('div', { className: 'ds-datepicker-panel', attrs: { 'data-ds-datepicker-panel': '', hidden: '' } })
  );

  const dateTimeDropdown = el(
    'div',
    { className: 'ds-datepicker-menu', attrs: { 'data-js': 'date-time-dropdown' } },
    el(
      'div',
      { className: 'ds-datepicker-trigger' },
      el('input', {
        className: 'ds-input ds-datepicker-input',
        attrs: { 'data-ds-datepicker-input': '', placeholder: 'Pick date & time', readonly: '' },
      }),
      el('span', { className: 'ds-datepicker-icon', attrs: { 'aria-hidden': 'true' } }, calendarIcon())
    ),
    el(
      'div',
      { className: 'ds-datepicker-panel', attrs: { 'data-ds-datepicker-panel': '', hidden: '' } },
      el('div', { attrs: { 'data-ds-datepicker-calendar': '' } }),
      el(
        'div',
        { className: 'ds-datepicker__footer', attrs: { 'data-ds-datepicker-footer': '' } },
        el('span', { className: 'ds-datepicker__footer-label', text: 'Time' }),
        el(
          'div',
          { className: 'ds-time-picker', attrs: { 'data-ds-datetime-picker': '' } },
          el(
            'div',
            {
              className: 'ds-select-menu ds-time-picker__segment',
              attrs: {
                'data-ds-time-hour': '',
                'data-placeholder': 'HH',
                'data-searchable': 'true',
                'data-options':
                  '["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"]',
              },
            },
            el(
              'button',
              { className: 'ds-select-trigger', attrs: { type: 'button' } },
              el('span', { className: 'ds-select-trigger__label', text: 'HH' }),
              el('span', { className: 'ds-select-trigger__icon', attrs: { 'aria-hidden': 'true' } }, chevronIcon())
            )
          ),
          el('span', { className: 'ds-time-picker__colon', text: ':' }),
          el(
            'div',
            {
              className: 'ds-select-menu ds-time-picker__segment',
              attrs: {
                'data-ds-time-minute': '',
                'data-placeholder': 'MM',
                'data-searchable': 'true',
                'data-options':
                  '["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"]',
              },
            },
            el(
              'button',
              { className: 'ds-select-trigger', attrs: { type: 'button' } },
              el('span', { className: 'ds-select-trigger__label', text: 'MM' }),
              el('span', { className: 'ds-select-trigger__icon', attrs: { 'aria-hidden': 'true' } }, chevronIcon())
            )
          )
        )
      )
    )
  );

  return el(
    'section',
    { className: 'ds-card ds-stack-3 ds-anim-fade-in' },
    el('h2', { className: 'ds-h4', text: 'DataGrid + DatePicker' }),
    el('div', { className: 'ds-datagrid' }, table),
    inlineDatepicker,
    inlineRange,
    datepickerDropdown,
    dateRangeDropdown,
    dateTimeDropdown
  );
};
