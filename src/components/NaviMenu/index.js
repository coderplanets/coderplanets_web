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
const getMenuInfo = (items, parentMenuId) => {
  const parentMenuIndex = R.findIndex(item => item.id === parentMenuId, items)

  const childMenuItems =
    parentMenuIndex >= 0 ? items[parentMenuIndex].childMenu : []

  return [parentMenuIndex, childMenuItems]
}

const NaviMenu = ({
  items,
  onSelect,
  joinMode,
  withDivider,
  initActiveMenuId,
  showMoreItem,
  onShowMore,
  pinNumberHoverType,
}) => {
  const [menuMode, setMenuMode] = useState('root')
  // select initial active menu item if need
  const [initDone, setInitDone] = useState(false)

  const [parentMenuId, setParentMenuId] = useState('')
  const [activeParentMenuId, setActiveParentMenuId] = useState('')
  const [expandChildId, setExpandChildId] = useState('')

  const [childMenuId, setChildMenuId] = useState('')
  const [parentMenuIndex, childMenuItems] = getMenuInfo(items, parentMenuId)

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
          menuItems={items}
          onSelect={handleRootSelect}
          withDivider={withDivider}
          activeParentMenuId={activeParentMenuId}
          initActiveMenuId={initActiveMenuId}
          initDone={initDone}
          setInitDone={setInitDone}
          showMoreItem={showMoreItem}
          onShowMore={onShowMore}
          pinNumberHoverType={pinNumberHoverType}
        />
      ) : (
        <ChildrenMenu
          childMenuId={childMenuId}
          expandChildId={expandChildId}
          onExpand={handleMenuExpand}
          onSelect={handleChildSelect}
          parentMenuItem={items[parentMenuIndex]}
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
  items: T.arrayOf(
    T.shape({
      id: T.string,
      title: T.string,
      icon: T.string,
      displayType: T.string,
      fixedIcon: T.oneOfType(T.string, T.node),
      pinNumber: T.number,
      childMenu: T.arrayOf(
        T.shape({
          id: T.string,
          title: T.string,
          icon: T.string,
          displayType: T.string,
          childMenu: T.arrayOf(
            T.shape({
              id: T.string,
              title: T.string,
              displayType: T.string,
            })
          ),
        })
      ),
    })
  ),
  pinNumberHoverType: T.oneOf(['pin', 'unpin']),
  showMoreItem: T.bool,
  onShowMore: T.oneOfType([T.func, T.instanceOf(null)]),
}

NaviMenu.defaultProps = {
  items: menuItems,
  onSelect: log,
  joinMode: true,
  withDivider: true,
  initActiveMenuId: '',
  showMoreItem: false,
  onShowMore: null,
  pinNumberHoverType: 'pin',
}

export default React.memo(NaviMenu)
