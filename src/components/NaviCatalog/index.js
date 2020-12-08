/*
 *
 * NaviCatalog
 *
 */

import React, { useState, useCallback, useEffect } from 'react'
import T from 'prop-types'
import { find, findIndex, propEq, last } from 'ramda'

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

  const item = find(propEq('id', path[0].id), items)
  if (item.id === last(path).id) return item

  return getCurrentMenuItem(path.slice(1), item?.childMenu)
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
  // 当前展示的 path list, 可能是选中的，也可能是仅浏览，未必选中
  const [childPath, setChildPath] = useState([])
  // 当前选中状态的 path list 快照
  const [pathSnapshot, setPathSnapshot] = useState([])
  const [menuItems, setMenuItems] = useState(items)

  // handle reset
  const handleReset = useCallback(() => {
    setMenuMode(ROOT_MENU)
    setActiveCatalogId('')
    setPathSnapshot([])
  }, [])

  // 区别是主菜单还是子菜单，如果是 root 菜单则背景色是透明的
  useEffect(() => {
    nilOrEmpty(childPath) ? setMenuMode(ROOT_MENU) : setMenuMode(CHILD_MENU)
  }, [childPath, menuItems])

  // 返回特定目录
  // dashboard 中的某一级目录，locate 目录等等
  const handleGoCatalog = useCallback(
    (catalogId) => {
      let targetPath
      // 如果有 catalogId 指返回到这个 catalogId 对应的 level
      // 没有则相当于 locate 已选中的 level
      if (catalogId) {
        // 目前只支持一级目录，需要扩展
        const pathIndex = findIndex((item) => item.id === catalogId, childPath)
        // 避免 slice(0, 0) 的情形
        targetPath = childPath.slice(0, pathIndex + 1)
      } else {
        targetPath = pathSnapshot
      }

      const menuItem = getCurrentMenuItem(targetPath, items)
      setMenuItems(menuItem?.childMenu || items)
      setChildPath(targetPath)
    },
    [childPath, pathSnapshot, items],
  )

  // 返回主目录
  const handleGoHome = useCallback(() => {
    setChildPath([])
    setMenuItems(items)
  }, [items])

  const handleMenuItemSelect = useCallback(
    (item) => {
      // 如果重复点击，则忽略
      if (find(propEq('id', item.id), childPath)) return

      // 如果没有 childMenu 就表示这个条目被选中
      if (nilOrEmpty(item.childMenu)) {
        setActiveCatalogId(item.id)
        onSelect(item.id, item.displayType)
        setPathSnapshot(childPath)
        return
      }

      let newChildPath
      if (nilOrEmpty(childPath)) {
        // 点击根菜单的情况
        newChildPath = [item]
        setChildPath(newChildPath)
      } else {
        // 点击子孙菜单的情况
        newChildPath = [...childPath, item]
        setChildPath(newChildPath)
      }

      const menuItem = getCurrentMenuItem(newChildPath, items)
      setMenuItems(menuItem?.childMenu || items)
    },
    [onSelect, childPath, items],
  )

  return (
    <Wrapper testId={testId}>
      <Header
        title={title}
        activeCatalogId={activeCatalogId}
        goHome={handleGoHome}
        goCatalog={handleGoCatalog}
        onReset={handleReset}
        childPath={childPath}
      />
      <Dashboard childPath={childPath} goCatalog={handleGoCatalog} />
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
