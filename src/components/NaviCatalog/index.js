/*
 *
 * NaviCatalog
 *
 */

import React, { useState, useCallback, useEffect } from 'react'
import T from 'prop-types'
import { find, propEq, last } from 'ramda'

import { buildLog, nilOrEmpty } from '@/utils'

import { ROOT_MENU, CHILD_MENU } from './constant'

import Header from './Header'
import Dashboard from './Dashboard'
import List from './List'

import menuItemsData from './menuData'
import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:NaviCatalog:index')

const getCurrentMenuItem = (path, items) => {
  if (nilOrEmpty(path) || nilOrEmpty(items)) return

  // const item = find(propEq('id', path[0].id), items)
  const item = find(propEq('id', path[0].id), items)
  if (item.id === last(path).id) return item

  return getCurrentMenuItem([path[1]], item?.childMenu)
}

// get parrentMenuIndex and child menu items
// const getMenuInfo = (items, parentMenuId) => {
//   const parentMenuIndex = findIndex((item) => item.id === parentMenuId, items)

//   const childMenuItems =
//     parentMenuIndex >= 0 ? items[parentMenuIndex].childMenu : []

//   return [parentMenuIndex, childMenuItems]
// }

const NaviCatalog = ({
  title,
  items,
  onSelect,
  withDivider,
  initActiveMenuId,
  showMoreItem,
  onShowMore,
  pinNumberHoverType,
  testId,
}) => {
  const [menuMode, setMenuMode] = useState(ROOT_MENU)
  // select initial active menu item if need
  const [initDone, setInitDone] = useState(false)

  const [activeParentMenuId, setActiveParentMenuId] = useState('')

  // handlers
  const handleReset = useCallback(() => {
    setMenuMode(ROOT_MENU)
    setActiveParentMenuId('')
  }, [])

  // new version
  // path in menu items json tree
  // 如果直接给一个 id 能否构建出这个 path ?
  const [childrenPath, setChildrenPath] = useState([])
  const [menuItems, setMenuItems] = useState(items)

  // 区别是主菜单还是子菜单，如果是 root 菜单则背景色是透明的
  useEffect(() => {
    nilOrEmpty(childrenPath) ? setMenuMode(ROOT_MENU) : setMenuMode(CHILD_MENU)
  }, [childrenPath, menuItems])

  const handleGoBack = useCallback(() => {
    const newChildrenPath = [...childrenPath]
    newChildrenPath.pop()
    setChildrenPath(newChildrenPath)

    const menuItem = getCurrentMenuItem(newChildrenPath, items)
    setMenuItems(menuItem?.childMenu || items)
  }, [childrenPath, items])

  const handleMenuItemSelect = useCallback(
    (item) => {
      log('current path: ', childrenPath)
      // 如果重复点击，则忽略
      if (find(propEq('id', item.id), childrenPath)) return

      if (nilOrEmpty(item.childMenu)) {
        setActiveParentMenuId(item.id)
        onSelect(item.id, item.displayType)
        return
      }

      let newChildrenPath
      if (nilOrEmpty(childrenPath)) {
        // 点击根菜单的情况
        newChildrenPath = [item]
        setChildrenPath(newChildrenPath)
      } else {
        // 点击子孙菜单的情况
        newChildrenPath = [...childrenPath, item]
        setChildrenPath(newChildrenPath)
      }

      const menuItem = getCurrentMenuItem(newChildrenPath, items)
      setMenuItems(menuItem?.childMenu || items)
    },
    [onSelect, childrenPath, items],
  )

  // log('# MenuMode- -> ', menuMode)
  // console.log('items --> ', items)
  // console.log('cur items --> ', menuItems)

  return (
    <Wrapper testId={testId}>
      <Header
        title={title}
        showBack
        showReset={activeParentMenuId !== ''}
        goBack={handleGoBack}
        reset={handleReset}
      />
      <Dashboard childrenPath={childrenPath} goBack={handleGoBack} />
      <List
        menuMode={menuMode}
        menuItems={menuItems}
        onSelect={handleMenuItemSelect}
        withDivider={withDivider}
        activeParentMenuId={activeParentMenuId}
        initActiveMenuId={initActiveMenuId}
        initDone={initDone}
        setInitDone={setInitDone}
        showMoreItem={showMoreItem}
        onShowMore={onShowMore}
        pinNumberHoverType={pinNumberHoverType}
      />
    </Wrapper>
  )
}

NaviCatalog.propTypes = {
  title: T.string,
  onSelect: T.func,
  withDivider: T.bool,
  initActiveMenuId: T.string,
  items: T.arrayOf(
    T.shape({
      id: T.string,
      title: T.string,
      icon: T.string,
      displayType: T.string,
      fixedIcon: T.oneOfType([T.string, T.node]),
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
            }),
          ),
        }),
      ),
    }),
  ),
  pinNumberHoverType: T.oneOf(['pin', 'unpin']),
  showMoreItem: T.bool,
  onShowMore: T.oneOfType([T.func, T.instanceOf(null)]),
  testId: T.string,
}

NaviCatalog.defaultProps = {
  items: menuItemsData,
  onSelect: log,
  withDivider: true,
  initActiveMenuId: '',
  showMoreItem: false,
  onShowMore: null,
  pinNumberHoverType: 'pin',
  testId: 'navi-menu',
  title: '',
}

export default NaviCatalog // React.memo(NaviCatalog)
