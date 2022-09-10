/*
 *
 * CollapseMenu
 *
 */

import React from 'react'
import T from 'prop-types'
import { keys } from 'ramda'

import { groupByKey } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import Group from './Group'

import { Wrapper } from './styles'

const MAX_DISPLAY_COUNT = 5
const TOTAL_TOGGLE_THROLD = 8 // 15

/* eslint-disable-next-line */
const log = buildLog('w:CollapseMenu:index')

const defaultActiveItem = { id: 2 }
const defaultItems = [
  {
    id: 1,
    title: 'coderplanets 是什么?',
    group: '基础问答',
  },
  {
    id: 2,
    title: '持续部署项目实践',
    group: '基础问答',
  },
  {
    id: 3,
    title: 'coderplanets 是什么 3?',
    group: '基础问答',
  },

  {
    id: 4,
    title: 'coderplanets 是什么 4?',
    group: '进阶问答',
  },
  {
    id: 5,
    title: 'coderplanets 是什么 5?',
    group: '进阶问答',
  },
  {
    id: 6,
    title: 'coderplanets 是什么 6?',
    group: '进阶问答',
  },
  {
    id: 7,
    title: 'coderplanets 是什么 7?',
    group: '进阶问答',
  },
  {
    id: 8,
    title: 'coderplanets 是什么 8?',
    group: '进阶问答',
  },
  {
    id: 9,
    title: 'coderplanets 是什么 9?',
    group: '进阶问答',
  },
  {
    id: 10,
    title: 'coderplanets 是什么 10?',
    group: '进阶问答',
  },
]

const CollapseMenu = ({
  testid,
  items,
  activeItem,
  onSelect,
  maxDisplayCount,
  totalToggleThrold,
}) => {
  const groupedItems = groupByKey(items, 'group')
  const groupsKeys = keys(groupedItems)

  return (
    <Wrapper testid={testid}>
      {groupsKeys.map((groupKey) => (
        <Group
          key={groupKey}
          title={groupKey}
          items={items}
          groupItems={groupedItems[groupKey]}
          activeItem={activeItem}
          maxDisplayCount={maxDisplayCount}
          totalToggleThrold={totalToggleThrold}
          onSelect={onSelect}
        />
      ))}
    </Wrapper>
  )
}

CollapseMenu.propTypes = {
  testid: T.string,
  items: T.arrayOf(
    T.shape({
      id: T.number,
      title: T.string,
      group: T.string,
    }),
  ), // .isRequired,
  activeItem: T.shape({
    id: T.number,
    title: T.string,
    group: T.string,
  }), // .isRequired,
  maxDisplayCount: T.number,
  totalToggleThrold: T.number,
  onSelect: T.func,
}

CollapseMenu.defaultProps = {
  testid: 'collapse-menu',
  items: defaultItems,
  activeItem: defaultActiveItem,
  // default display count in each group, the remaining part will be folded
  maxDisplayCount: MAX_DISPLAY_COUNT,
  // if items count < than this, will not be folded in each group
  totalToggleThrold: TOTAL_TOGGLE_THROLD,
  onSelect: log,
}

export default React.memo(CollapseMenu)
