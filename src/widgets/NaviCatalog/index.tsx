/*
 *
 * NaviCatalog
 *
 */

import { FC, useState, useCallback, useEffect, memo } from 'react'
import { find, findIndex, propEq, last } from 'ramda'

import { URL_QUERY } from '@/constant'
import type { TNaviTag } from '@/spec'

import { findDeepMatch } from '@/utils/helper'
import { buildLog } from '@/utils/logger'
import { nilOrEmpty } from '@/utils/validator'
import { getQueryFromUrl, markRoute } from '@/utils/route'

import type { TMenuMode } from './spec'
import { ROOT_MENU, CHILD_MENU } from './constant'

import Header from './Header'
import Dashboard from './Dashboard'
import List from './List'

import { Wrapper } from './styles'

import {
  getCurrentMenuItem,
  findPath,
  covertPathToURLQuery,
  tags2Menu,
} from './helper'

/* eslint-disable-next-line */
const log = buildLog('w:NaviCatalog:index')

type TProps = {
  title?: string
  withDivider?: boolean
  // initActiveMenuId?: string
  showMoreItem?: boolean
  // 是否显示每个目录项的条目总数
  showItemTotal?: boolean
  testid?: string
  tags: TNaviTag[]
  headerUtils?: boolean

  onSelect?: (id: string, type: string) => void
  onShowMore?: () => void
}

const NaviCatalog: FC<TProps> = ({
  testid = 'navi-menu',
  title = '',
  tags,
  onSelect = log,
  withDivider = false,
  // initActiveMenuId = '',
  showMoreItem = false,
  showItemTotal = false,
  onShowMore = null,
  headerUtils = true,
}) => {
  // console.log('the tags: ', tags)
  const items = tags2Menu(tags)
  // console.log('the fucking items: ', items)

  const [menuMode, setMenuMode] = useState<TMenuMode>(ROOT_MENU)
  // 当前选中的目录 id, 不包括在其链路上的 id
  const [activeCatalogId, setActiveCatalogId] = useState<string>('')
  // 当前展示的 path list, 可能是选中的，也可能是仅浏览，未必选中
  const [viewPath, setViewPath] = useState([])
  // 当前选中状态的 path list 快照
  const [activePath, setActivePath] = useState([])
  // 设置当前显示的目录项列表
  const [catalogItems, setCatalogItems] = useState(items)

  // sync state from URL query
  // 同步 URL 上的状态, 注意这里的同步是客户端加载后的同步，没有，也没有必要使用 SSR
  useEffect(() => {
    const pathQuery = getQueryFromUrl(URL_QUERY.NAVI_CATALOG_PATH)
    if (pathQuery) {
      const pathFromURL = findPath(items, pathQuery)
      // log('pathFromURL: ', pathFromURL)
      const activeItem = findDeepMatch(items, 'id', last(pathFromURL).id)
      const isLastLevel = nilOrEmpty(activeItem?.childMenu)
      // log('isLastLevel: ', isLastLevel)

      if (!nilOrEmpty(pathFromURL)) {
        const curCatalogPath = [...pathFromURL]
        // 如果当前目录没有子项，则显示该层上一层的目录列表
        if (isLastLevel) curCatalogPath.pop()

        setActivePath(curCatalogPath)
        setViewPath(curCatalogPath)
        setActiveCatalogId(activeItem.id)
        const menuItem = getCurrentMenuItem(curCatalogPath, items)
        // 使用 items 是指 curCatalogPath 就在第一级的情况
        setCatalogItems(menuItem?.childMenu || items)
      }
    }
    // }, [items])
  }, []) // TODO: use raw instead

  // reset select states
  const handleReset = useCallback(() => {
    setMenuMode(ROOT_MENU)
    setActiveCatalogId('')
    setActivePath([])
    setViewPath([])
    setCatalogItems(items)
    markRoute(covertPathToURLQuery([]))
  }, [items])

  // 区别是主菜单还是子菜单，如果是 root 菜单则背景色是透明的
  useEffect(() => {
    nilOrEmpty(viewPath) ? setMenuMode(ROOT_MENU) : setMenuMode(CHILD_MENU)
  }, [viewPath, catalogItems])

  // 定位到当前选中
  const handleLocate = useCallback(() => {
    const menuItem = getCurrentMenuItem(activePath, items)
    setCatalogItems(menuItem?.childMenu || items)
    setViewPath(activePath)
  }, [activePath, items])

  // 根据目录 id 返回到特定目录
  // dashboard 中的某一级目录，locate 目录等等
  const handleGoCatalog = useCallback(
    (catalogId) => {
      let targetPath
      // 如果有 catalogId 指返回到这个 catalogId 对应的 level
      // 没有则相当于 locate 已选中的 level
      if (catalogId) {
        // 目前只支持一级目录，需要扩展
        const pathIndex = findIndex((item) => item.id === catalogId, viewPath)
        // 避免 slice(0, 0) 的情形
        targetPath = viewPath.slice(0, pathIndex + 1)
      } else {
        // 这种情况是在第二级目录，直接返回主目录即可
        targetPath = []
      }

      const menuItem = getCurrentMenuItem(targetPath, items)
      setCatalogItems(menuItem?.childMenu || items)
      setViewPath(targetPath)
    },
    [viewPath, items],
  )

  // 返回主目录
  const handleGoHome = useCallback(() => {
    setViewPath([])
    setCatalogItems(items)
  }, [items])

  const handleMenuItemSelect = useCallback(
    (item) => {
      // 如果重复点击，则忽略
      if (find(propEq('id', item.id), viewPath)) return

      // 如果没有 childMenu 就表示这个条目被选中
      if (nilOrEmpty(item.childMenu)) {
        setActiveCatalogId(item.id)
        onSelect(item.id, item.displayType)
        setActivePath(viewPath)
        markRoute(covertPathToURLQuery([...viewPath, item]))
        return
      }

      let newChildPath
      if (nilOrEmpty(viewPath)) {
        // 点击根菜单的情况
        newChildPath = [item]
        setViewPath(newChildPath)
      } else {
        // 点击子孙菜单的情况
        newChildPath = [...viewPath, item]
        setViewPath(newChildPath)
      }

      const menuItem = getCurrentMenuItem(newChildPath, items)
      setCatalogItems(menuItem?.childMenu || items)
    },
    [onSelect, viewPath, items],
  )

  return (
    <Wrapper testid={testid}>
      {headerUtils && (
        <Header
          title={title}
          activeCatalogId={activeCatalogId}
          goHome={handleGoHome}
          onLocate={handleLocate}
          onReset={handleReset}
          viewPath={viewPath}
        />
      )}
      <Dashboard viewPath={viewPath} goCatalog={handleGoCatalog} />
      <List
        menuMode={menuMode}
        catalogItems={catalogItems}
        onItemSelect={handleMenuItemSelect}
        withDivider={withDivider}
        activeCatalogId={activeCatalogId}
        activePath={activePath}
        showMoreItem={showMoreItem}
        showItemTotal={showItemTotal}
        onShowMore={onShowMore}
      />
    </Wrapper>
  )
}

export default memo(NaviCatalog)
