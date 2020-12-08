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
  const [activeCatalogId, setActiveCatalogId] = useState('')
  // path in menu items json tree
  const [childrenPath, setChildrenPath] = useState([])
  const [pathSnapshot, setPathSnapshot] = useState([])
  const [menuItems, setMenuItems] = useState(items)

  log('## pathSnapshot: ', pathSnapshot)

  // handle reset
  const handleReset = useCallback(() => {
    setMenuMode(ROOT_MENU)
    setActiveCatalogId('')
    setPathSnapshot([])
  }, [])

  // 区别是主菜单还是子菜单，如果是 root 菜单则背景色是透明的
  useEffect(() => {
    nilOrEmpty(childrenPath) ? setMenuMode(ROOT_MENU) : setMenuMode(CHILD_MENU)
  }, [childrenPath, menuItems])

  // 返回上一层
  const handleGoBack = useCallback(() => {
    const newChildrenPath = [...childrenPath]
    newChildrenPath.pop()
    setChildrenPath(newChildrenPath)

    const menuItem = getCurrentMenuItem(newChildrenPath, items)
    setMenuItems(menuItem?.childMenu || items)
  }, [childrenPath, items])

  // 返回特定目录
  // dashboard 中的某一级目录，locate 目录等等
  const handleGoCatalog = useCallback(() => {
    log('=> pathSnapshot: ', pathSnapshot)
    log('=> items: ', items)

    setChildrenPath(pathSnapshot)
    const menuItem = getCurrentMenuItem(pathSnapshot, items)

    log('=> getCurrentMenuItem: ', menuItem)
    setMenuItems(menuItem?.childMenu || items)
  }, [pathSnapshot, items])

  // 返回主目录
  const handleGoHome = useCallback(() => {
    setChildrenPath([])
    setMenuItems(items)
  }, [items])

  const handleMenuItemSelect = useCallback(
    (item) => {
      log('current path: ', childrenPath)
      // 如果重复点击，则忽略
      if (find(propEq('id', item.id), childrenPath)) return

      // 如果没有 childMenu 就表示这个条目被选中
      if (nilOrEmpty(item.childMenu)) {
        setActiveCatalogId(item.id)
        onSelect(item.id, item.displayType)
        setPathSnapshot(childrenPath)
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

  return (
    <Wrapper testId={testId}>
      <Header
        title={title}
        activeCatalogId={activeCatalogId}
        goHome={handleGoHome}
        goCatalog={handleGoCatalog}
        onReset={handleReset}
        childrenPath={childrenPath}
      />
      <Dashboard childrenPath={childrenPath} goBack={handleGoBack} />
      <List
        menuMode={menuMode}
        menuItems={menuItems}
        onSelect={handleMenuItemSelect}
        withDivider={withDivider}
        activeCatalogId={activeCatalogId}
        pathSnapshot={pathSnapshot}
        initActiveMenuId={initActiveMenuId}
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

export default React.memo(NaviCatalog)
