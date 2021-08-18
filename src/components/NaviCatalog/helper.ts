import {
  map,
  find,
  propEq,
  last,
  filter,
  findIndex,
  equals,
  clone,
} from 'ramda'

import type { TNaviTag } from '@/spec'
import { URL_QUERY } from '@/constant'
import { nilOrEmpty } from '@/utils/validator'

// 根据 path 路径得到当前目录项
export const getCurrentMenuItem = (
  path: TNaviTag[],
  items: TNaviTag[],
): TNaviTag => {
  if (nilOrEmpty(path) || nilOrEmpty(items)) return

  const item = find(propEq('id', path[0].id), items) as TNaviTag
  if (item.id === last(path).id) return item

  return getCurrentMenuItem(path.slice(1), item?.childMenu)
}

/**
 * findPath by given path-string from url
 *
 * @param {array of catalog} items
 * @param {string} pathString
 * @returns {array of catalog}
 */
export const findPath = (
  items: TNaviTag[],
  pathString = 'aa-bb-cc',
): TNaviTag[] => {
  // pathList => parentId-childId-subChildId-xxx
  const idPaths = pathString.split('-')

  const path = []
  let previousCatalog = items
  for (let index = 0; index < idPaths.length; index += 1) {
    const pathId = idPaths[index]

    const catalog = previousCatalog
    const item = find(propEq('id', pathId), catalog) as TNaviTag
    if (!item) return path

    if (item.childMenu) {
      previousCatalog = item.childMenu
    }
    path.push(item)
  }

  return path
}

export const covertPathToURLQuery = (
  path: TNaviTag[],
): Record<string, unknown> => {
  const idPathString = map((catalog) => catalog.id, path).join('-')
  if (nilOrEmpty(idPathString)) return { [URL_QUERY.NAVI_CATALOG_PATH]: '' }

  return { [URL_QUERY.NAVI_CATALOG_PATH]: idPathString }
}

// convert
const findUpdatePath = (menu: TNaviTag[], extra: string[]): string[] => {
  // console.log('findUpdatePath menu: ', menu)
  // console.log('findUpdatePath extra: ', extra)

  const rootIndex = findIndex((item) => equals(item.extra, [extra[0]]), menu)
  if (rootIndex === -1) return []

  const updatePath = []

  const parentMenuPath = extra.slice(0, extra.length - 1)
  if (parentMenuPath.length === 1) {
    updatePath.push(rootIndex)
  }

  if (parentMenuPath.length === 2) {
    updatePath.push(rootIndex)

    const index = findIndex(
      (item) => equals(item.extra, parentMenuPath),
      menu[rootIndex].childMenu,
    )

    updatePath.push(index)
  }

  return updatePath
}

/**
 * covert tags data to menu format data
 * 目前只支持最多三级目录，因为从产品上来讲没有更深层目录的需要
 * 另一方面，代码上支持无限层级的目录会很抽象，现阶段直白一些也有利于排查
 */
export const tags2Menu = (tags: TNaviTag[]): TNaviTag[] => {
  let menu = []
  menu = clone(filter((item) => item.extra.length === 1, tags))

  // level-2
  const menu2 = clone(filter((item) => item.extra.length === 2, tags))
  menu2.forEach((item) => {
    const pathIndex = findUpdatePath(menu, item.extra)
    if (!menu[pathIndex[0]].childMenu) {
      menu[pathIndex[0]].childMenu = []
    }
    menu[pathIndex[0]].childMenu.push(item)
  })

  // level-3
  const menu3 = clone(filter((item) => item.extra.length === 3, tags))
  menu3.forEach((item) => {
    const pathIndex = findUpdatePath(menu, item.extra)

    if (!menu[pathIndex[0]].childMenu[pathIndex[1]].childMenu) {
      menu[pathIndex[0]].childMenu[pathIndex[1]].childMenu = []
    }
    menu[pathIndex[0]].childMenu[pathIndex[1]].childMenu.push(item)
  })

  return menu
}
