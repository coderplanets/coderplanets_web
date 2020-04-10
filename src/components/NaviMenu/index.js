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
const getMenuInfo = (menuItems, parentMenuId) => {
  const parentMenuIndex = R.findIndex(
    item => item.id === parentMenuId,
    menuItems
  )

  const childMenuItems =
    parentMenuIndex >= 0 ? menuItems[parentMenuIndex].childMenu : []

  return [parentMenuIndex, childMenuItems]
}

const NaviMenu = ({ onSelect, joinMode, withDivider, initActiveMenuId }) => {
  const [menuMode, setMenuMode] = useState('root')
  // select initial active menu item if need
  const [initDone, setInitDone] = useState(false)

  const [parentMenuId, setParentMenuId] = useState('')
  // const [activeParentMenuId, setActiveParentMenuId] = useState(menuItems[0].id)
  const [activeParentMenuId, setActiveParentMenuId] = useState('')
  const [expandChildId, setExpandChildId] = useState('')

  const [childMenuId, setChildMenuId] = useState('')
  const [parentMenuIndex, childMenuItems] = getMenuInfo(menuItems, parentMenuId)

  // handlers
  const handleGoBack = useCallback(() => setMenuMode('root'), [])
  const handleRootSelect = useCallback(
    item => {
      setParentMenuId(item.id)
      setMenuMode('child')

      if (nilOrEmpty(item.childMenu)) {
        setActiveParentMenuId(item.id)
        onSelect(item.id, item.displayType)
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
          withDivider={withDivider}
          activeParentMenuId={activeParentMenuId}
          initActiveMenuId={initActiveMenuId}
          initDone={initDone}
          setInitDone={setInitDone}
        />
      ) : (
        <ChildrenMenu
          childMenuId={childMenuId}
          expandChildId={expandChildId}
          onExpand={handleMenuExpand}
          onSelect={handleChildSelect}
          parentMenuItem={menuItems[parentMenuIndex]}
          menuItems={childMenuItems}
          goBack={handleGoBack}
          joinMode={joinMode}
        />
      )}
    </Wrapper>
  )
}

NaviMenu.propTypes = {
  onSelect: T.func,
  joinMode: T.bool,
  withDivider: T.bool,
  initActiveMenuId: T.string,
}

NaviMenu.defaultProps = {
  onSelect: log,
  joinMode: true,
  withDivider: true,
  initActiveMenuId: '',
}

export default React.memo(NaviMenu)
