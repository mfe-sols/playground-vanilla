import { el } from '../dom';

export const buildDataDisplayCard = () =>
  el(
    'section',
    { className: 'ds-card ds-stack-3 ds-anim-fade-in' },
    el('h2', { className: 'ds-h4', text: 'Data Display' }),
    el(
      'div',
      { className: 'ds-inline-4' },
      el('span', { className: 'ds-badge', text: 'Default' }),
      el('span', { className: 'ds-badge ds-badge--success', text: 'Success' }),
      el('span', { className: 'ds-badge ds-badge--warning', text: 'Warning' }),
      el('span', { className: 'ds-badge ds-badge--danger', text: 'Danger' })
    ),
    el(
      'div',
      { className: 'ds-inline-3' },
      el('span', { className: 'ds-chip', text: 'Design' }),
      el(
        'span',
        { className: 'ds-chip' },
        'Tag',
        el('button', { className: 'ds-chip__close', text: '×', attrs: { type: 'button', 'aria-label': 'Remove' } })
      )
    ),
    el(
      'div',
      { className: 'ds-avatar-group' },
      el('span', { className: 'ds-avatar', text: 'JD' }),
      el('span', { className: 'ds-avatar', text: 'AB' }),
      el('span', { className: 'ds-avatar', text: 'MN' })
    ),
    el(
      'div',
      { className: 'ds-list' },
      el(
        'div',
        { className: 'ds-list-item' },
        el('span', { className: 'ds-avatar ds-avatar--sm', text: 'JD' }),
        el(
          'div',
          { className: 'ds-list-item__content' },
          el('div', { className: 'ds-list-item__title', text: 'Jane Doe' }),
          el('div', { className: 'ds-list-item__subtitle', text: 'Admin' })
        ),
        el('span', { className: 'ds-badge ds-badge--info', text: 'New' })
      )
    ),
    el(
      'table',
      { className: 'ds-table' },
      el(
        'thead',
        { className: 'ds-thead' },
        el(
          'tr',
          { className: 'ds-tr' },
          el('th', { className: 'ds-th', text: 'Name' }),
          el('th', { className: 'ds-th', text: 'Status' })
        )
      ),
      el(
        'tbody',
        {},
        el(
          'tr',
          { className: 'ds-tr' },
          el('td', { className: 'ds-td', text: 'Project A' }),
          el('td', { className: 'ds-td' }, el('span', { className: 'ds-badge ds-badge--success', text: 'Active' }))
        )
      )
    ),
    el(
      'nav',
      { className: 'ds-pagination', attrs: { 'aria-label': 'Pagination' } },
      el('button', { className: 'ds-page', text: 'Prev', attrs: { type: 'button', 'aria-label': 'Previous' } }),
      el('button', { className: 'ds-page', text: '1', attrs: { type: 'button', 'data-state': 'active' } }),
      el('button', { className: 'ds-page', text: '2', attrs: { type: 'button' } }),
      el('button', { className: 'ds-page', text: 'Next', attrs: { type: 'button', 'aria-label': 'Next' } })
    )
  );
