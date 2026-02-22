import { el } from '../dom';

export const buildTabsCard = () =>
  el(
    'section',
    { className: 'ds-card ds-stack-3 ds-anim-fade-in', attrs: { 'data-ds-tabs-root': '' } },
    el('h2', { className: 'ds-h4', text: 'Tabs' }),
    el(
      'div',
      { className: 'ds-tabs ds-anim-fade-in', attrs: { 'data-js': 'tabs' } },
      el('span', { className: 'ds-tabs-indicator', attrs: { 'data-ds-tab-indicator': '' } }),
      el('button', {
        className: 'ds-tab',
        text: 'Overview',
        attrs: { type: 'button', 'data-ds-tab-trigger': '', 'data-ds-value': 'overview' },
      }),
      el('button', {
        className: 'ds-tab',
        text: 'Details',
        attrs: { type: 'button', 'data-ds-tab-trigger': '', 'data-ds-value': 'details' },
      }),
      el('button', {
        className: 'ds-tab',
        text: 'Settings',
        attrs: { type: 'button', 'data-ds-tab-trigger': '', 'data-ds-value': 'settings' },
      })
    ),
    el(
      'div',
      { className: 'ds-anim-slide-up', attrs: { 'data-ds-tab-panel': '', 'data-ds-value': 'overview', 'data-anim': 'slide-left' } },
      'Overview content'
    ),
    el(
      'div',
      { className: 'ds-anim-slide-up', attrs: { hidden: '', 'data-ds-tab-panel': '', 'data-ds-value': 'details', 'data-anim': 'slide-right' } },
      'Details content'
    ),
    el(
      'div',
      { className: 'ds-anim-slide-up', attrs: { hidden: '', 'data-ds-tab-panel': '', 'data-ds-value': 'settings', 'data-anim': 'fade' } },
      'Settings content'
    )
  );
