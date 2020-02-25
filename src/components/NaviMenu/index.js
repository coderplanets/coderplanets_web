/*
 *
 * NaviMenu
 *
 */

import React, { useState } from 'react'
import T from 'prop-types'
import R from 'ramda'

import { buildLog, nilOrEmpty } from '@utils'

import RootMenu from './RootMenu'
import ChildrenMenu from './ChildrenMenu'

import menuItems from './menuData'
import { Wrapper /* ActiveDot */ } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

/* <ActiveDot /> */
const NaviMenu = ({ onSelect }) => {
  const [menuMode, setMenuMode] = useState('root')
  const [parentMenuId, setParentMenuId] = useState('')

  const parentMenuIndex = R.findIndex(
    item => item.id === parentMenuId,
    menuItems
  )

  const childMenuItems =
    parentMenuIndex >= 0 ? menuItems[parentMenuIndex].childMenu : []

  // onSelect(item.id, item.displayType)
  return (
    <Wrapper>
      {menuMode === 'root' || R.isEmpty(childMenuItems) ? (
        <RootMenu
          menuItems={menuItems}
          onSelect={item => {
            setParentMenuId(item.id)
            setMenuMode('child')

            nilOrEmpty(item.childMenu) && onSelect(item.id, item.displayType)
          }}
        />
      ) : (
        <ChildrenMenu
          onSelect={onSelect}
          parentMenuItem={menuItems[parentMenuIndex]}
          menuItems={childMenuItems}
          goBack={() => setMenuMode('root')}
        />
      )}
    </Wrapper>
  )
}

NaviMenu.propTypes = {
  onSelect: T.func,
  // https://www.npmjs.com/package/prop-types
}

NaviMenu.defaultProps = {
  onSelect: log,
}

export default React.memo(NaviMenu)
