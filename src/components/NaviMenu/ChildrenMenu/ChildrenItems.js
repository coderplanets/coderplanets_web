/*
 *
 * NaviMenu
 *
 */

import React, { useCallback } from 'react'
import T from 'prop-types'

import { buildLog, s2o, o2s } from '@utils'
// import { ICON_CMD } from '@config'

import { SpaceGrow } from '@components/Common'

import {
  Wrapper,
  Item,
  ActiveDot,
} from '../styles/children_menu/children_items'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:ChildrenItems')

const ChildrenItems = ({
  childMenuId,
  expandMenuId,
  parentId,
  items,
  onSelect,
}) => {
  const menuItems = items || []

  const handleSelect = useCallback(
    e => {
      const item = s2o(e.target.dataset.item)
      onSelect(item, item.displayType)
    },
    [onSelect]
  )

  return (
    <Wrapper active={expandMenuId === parentId}>
      {menuItems.map(item => (
        <Item
          key={item.id}
          data-item={o2s(item)}
          active={item.id === childMenuId}
          onClick={handleSelect}
        >
          {item.title}
          <SpaceGrow />
          {item.id === childMenuId && (
            <ActiveDot active={item.id === childMenuId} />
          )}
        </Item>
      ))}
    </Wrapper>
  )
}

ChildrenItems.propTypes = {
  childMenuId: T.string.isRequired,
  expandMenuId: T.oneOfType([T.string, T.instanceOf(null)]),
  parentId: T.string.isRequired,
  // TODO:  more spec
  items: T.arrayOf(T.object).isRequired,
  onSelect: T.func.isRequired,
}

ChildrenItems.defaultProps = {
  expandMenuId: null,
}

export default React.memo(ChildrenItems)
