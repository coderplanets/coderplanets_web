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
  const [activeParentMenuId, setActiveParentMenuId] = useState(menuItems[0].id)
  const [expandChildId, setExpandChildId] = useState('')

  const [childMenuId, setChildMenuId] = useState('')

  const [parentMenuIndex, childMenuItems] = getMenuinfo(menuItems, parentMenuId)

  // handlers
  const handleGoback = useCallback(() => setMenuMode('root'), [])

  const handleRootSelect = useCallback(
    item => {
      setParentMenuId(item.id)
      setMenuMode('child')

      if (nilOrEmpty(item.childMenu)) {
        setActiveParentMenuId(item.id)
        onSelect(item.id, item.displayType)
      } else {
        setChildMenuId('')
        setExpandChildId('')
      }
    },
    [onSelect]
  )

  const handleChildSelect = useCallback(
    item => {
      setChildMenuId(item.id)
      onSelect(item.id, item.displayType)
      setActiveParentMenuId(parentMenuId)

      nilOrEmpty(item.childMenu) && onSelect(item.id, item.displayType)
    },
    [onSelect, parentMenuId]
  )

  const handleMenuExpand = useCallback(item => setExpandChildId(item.id), [])

  return (
    <Wrapper>
      {menuMode === 'root' || R.isEmpty(childMenuItems) ? (
        <RootMenu
          menuItems={menuItems}
          onSelect={handleRootSelect}
          activeParentMenuId={activeParentMenuId}
        />
      ) : (
        <ChildrenMenu
          childMenuId={childMenuId}
          expandChildId={expandChildId}
          onExpand={handleMenuExpand}
          onSelect={handleChildSelect}
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
