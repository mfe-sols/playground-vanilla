import { el } from '../dom';
import { caretIcon } from '../icons';

const treeToggle = () =>
  el(
    'button',
    { className: 'ds-tree__toggle', attrs: { type: 'button', 'data-ds-tree-toggle': '' } },
    caretIcon()
  );

const treeIcon = (token: string, isLeaf = false) =>
  el('span', {
    className: `mfe-tree__node-icon${isLeaf ? ' mfe-tree__node-icon--leaf' : ''}`,
    attrs: { 'aria-hidden': 'true' },
    text: token,
  });

const treeContent = (label: string, meta: string) =>
  el(
    'span',
    { className: 'mfe-tree__content' },
    el('span', { className: 'ds-tree__label mfe-tree__label', text: label }),
    el('span', { className: 'mfe-tree__meta', text: meta })
  );

const treeLeaf = (id: string, token: string, label: string, meta: string) =>
  el(
    'div',
    {
      className: 'ds-tree__item',
      attrs: { 'data-ds-tree-item': '', 'data-ds-id': id },
    },
    el('span', { className: 'mfe-tree__spacer', attrs: { 'aria-hidden': 'true' } }),
    treeIcon(token, true),
    treeContent(label, meta)
  );

const treeBranch = (
  id: string,
  token: string,
  label: string,
  meta: string,
  pill: string,
  children: HTMLElement[],
  state: 'open' | 'closed' = 'open'
) => {
  const childWrap = el('div', {
    className: 'ds-tree__children',
    attrs: { 'data-ds-tree-children': '', 'data-state': state },
  });
  if (state === 'closed') childWrap.setAttribute('hidden', '');
  children.forEach((child) => childWrap.appendChild(child));

  return el(
    'div',
    {
      className: 'ds-tree__item',
      attrs: {
        'data-ds-tree-item': '',
        'data-ds-id': id,
        'data-state': state,
      },
    },
    treeToggle(),
    treeIcon(token),
    treeContent(label, meta),
    el('span', { className: 'mfe-tree__pill', text: pill }),
    childWrap
  );
};

export const buildTreeCard = () => {
  const tree = el(
    'div',
    { className: 'ds-tree mfe-tree', attrs: { 'data-js': 'tree' } },
    treeBranch(
      'root',
      'WS',
      'Workspace',
      'Unified platform modules',
      'Live',
      [
        treeBranch(
          'projects',
          'PJ',
          'Projects',
          'Production applications',
          '3',
          [
            treeLeaf('project-a', 'A', 'Project Alpha', 'Core commerce shell'),
            treeLeaf('project-b', 'B', 'Project Beta', 'Analytics workspace'),
          ],
          'open'
        ),
        treeBranch(
          'teams',
          'TM',
          'Teams',
          'Organization units',
          '2',
          [
            treeLeaf('team-a', 'DS', 'Design', 'UX and visual language'),
            treeLeaf('team-b', 'EN', 'Engineering', 'Platform and delivery'),
          ],
          'closed'
        ),
        treeBranch(
          'archives',
          'AR',
          'Archives',
          'Historical snapshots',
          '2',
          [
            treeLeaf('2023', '23', '2023', 'Release notes and logs'),
            treeLeaf('2022', '22', '2022', 'Baseline archive'),
          ],
          'closed'
        ),
      ],
      'open'
    )
  );

  return el(
    'section',
    { className: 'ds-card ds-stack-3 ds-anim-fade-in' },
    el('h2', { className: 'ds-h4', text: 'TreeView' }),
    tree
  );
};
