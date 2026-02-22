import { el } from '../dom';

export const buildNavigationCard = () =>
  el(
    'section',
    { className: 'ds-card ds-stack-3 ds-anim-fade-in' },
    el('h2', { className: 'ds-h4', text: 'Navigation' }),
    el(
      'nav',
      { className: 'ds-breadcrumbs', attrs: { 'aria-label': 'Breadcrumb' } },
      el('a', { className: 'ds-breadcrumbs__item', text: 'Home', attrs: { href: '#' } }),
      el('span', { className: 'ds-breadcrumbs__separator', text: '/' }),
      el('a', { className: 'ds-breadcrumbs__item', text: 'Library', attrs: { href: '#' } }),
      el('span', { className: 'ds-breadcrumbs__separator', text: '/' }),
      el('span', { className: 'ds-breadcrumbs__item', text: 'Data', attrs: { 'aria-current': 'page' } })
    ),
    el(
      'div',
      { className: 'ds-bottom-nav', attrs: { style: 'position: relative' } },
      el(
        'div',
        { className: 'ds-bottom-nav__list' },
        el('button', { className: 'ds-bottom-nav__item', text: 'Home', attrs: { type: 'button', 'data-state': 'active' } }),
        el('button', { className: 'ds-bottom-nav__item', text: 'Search', attrs: { type: 'button' } }),
        el('button', { className: 'ds-bottom-nav__item', text: 'Profile', attrs: { type: 'button' } })
      )
    )
  );
