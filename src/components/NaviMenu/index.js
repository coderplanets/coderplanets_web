/*
 *
 * NaviMenu
 *
 */

import React, { useState, useCallback } from 'react'
import T from 'prop-types'
import R from 'ramda'

import { buildLog, nilOrEmpty } from '@utils'

import RootMenu from './RootMenu'
import ChildrenMenu from './ChildrenMenu'

import menuItems from './menuData'
import { Wrapper /* ActiveDot */ } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

// get parrentMenuIndex and child menu items
const getMenuinfo = (menuItems, parentMenuId) => {
  const parentMenuIndex = R.findIndex(
    item => item.id === parentMenuId,
    menuItems
  )

  const childMenuItems =
    parentMenuIndex >= 0 ? menuItems[parentMenuIndex].childMenu : []

  return [parentMenuIndex, childMenuItems]
}

const NaviMenu = ({ onSelect }) => {
  const [menuMode, setMenuMode] = useState('root')
  const [parentMenuId, setParentMenuId] = useState('')

  const [parentMenuIndex, childMenuItems] = getMenuinfo(menuItems, parentMenuId)

  // handlers
  const handleGoback = useCallback(() => setMenuMode('root'), [])
  const handleSelect = useCallback(
    item => {
      setParentMenuId(item.id)
      setMenuMode('child')

      nilOrEmpty(item.childMenu) && onSelect(item.id, item.displayType)
    },
    [onSelect]
  )

  return (
    <Wrapper>
      {menuMode === 'root' || R.isEmpty(childMenuItems) ? (
        <RootMenu menuItems={menuItems} onSelect={handleSelect} />
      ) : (
        <ChildrenMenu
          onSelect={onSelect}
          parentMenuItem={menuItems[parentMenuIndex]}
          menuItems={childMenuItems}
          goBack={handleGoback}
        />
      )}
    </Wrapper>
  )
}

NaviMenu.propTypes = {
  onSelect: T.func,
}

NaviMenu.defaultProps = {
  onSelect: log,
}

export default React.memo(NaviMenu)
