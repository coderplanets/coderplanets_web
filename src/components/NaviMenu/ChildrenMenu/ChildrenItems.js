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

const ChildrenItems = ({ activeMenuId, parentId, items, itemOnClick }) => {
  // if (activeMenuId !== parentId) {
  //   return <div />
  // }
  const menuItems = items || []

  return (
    <Wrapper active={activeMenuId === parentId}>
      {menuItems.map(item => (
        <div key={item.id} onClick={() => itemOnClick(parentId, item.id)}>
          <Item active={item.id === '101'}>
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
  itemOnClick: T.func.isRequired,
}

ChildrenItems.defaultProps = {
  activeMenuId: null,
}

export default React.memo(ChildrenItems)
