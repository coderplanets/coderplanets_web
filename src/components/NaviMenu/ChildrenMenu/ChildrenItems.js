/*
 *
 * NaviMenu
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'
// import { ICON_CMD } from '@config'

import { SpaceGrow } from '@components/BaseStyled'

import {
  Wrapper,
  Item,
  ActiveDot,
} from '../styles/children_menu/children_items'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

const ChildrenItems = ({ activeMenuId, parentId, items, onSelect }) => {
  // if (activeMenuId !== parentId) {
  //   return <div />
  // }
  const menuItems = items || []

  return (
    <Wrapper active={activeMenuId === parentId}>
      {menuItems.map(item => (
        <div key={item.id}>
          <Item
            active={item.id === '101'}
            onClick={() => {
              onSelect(item.id, item.displayType)
            }}
          >
            {item.id === '101' && <ActiveDot />}

            <SpaceGrow />
            {item.title}
          </Item>
        </div>
      ))}
    </Wrapper>
  )
}

ChildrenItems.propTypes = {
  activeMenuId: T.oneOfType([T.string, T.instanceOf(null)]),
  parentId: T.string.isRequired,
  // TODO:  more spec
  items: T.arrayOf(T.object).isRequired,
  onSelect: T.func.isRequired,
}

ChildrenItems.defaultProps = {
  activeMenuId: null,
}

export default React.memo(ChildrenItems)
