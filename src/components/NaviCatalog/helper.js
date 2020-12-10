import { map, find, propEq, last } from 'ramda'

import { URL_QUERY } from '@/constant'
import { nilOrEmpty } from '@/utils'

// 根据 path 路径得到当前目录项
export const getCurrentMenuItem = (path, items) => {
  if (nilOrEmpty(path) || nilOrEmpty(items)) return

  const item = find(propEq('id', path[0].id), items)
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
export const findPath = (items, pathString = 'aa-bb-cc') => {
  // pathList => parentId-childId-subChildId-xxx
  const idPaths = pathString.split('-')

  const path = []
  let previousCatalog = items
  for (let index = 0; index < idPaths.length; index += 1) {
    const pathId = idPaths[index]

    const catalog = previousCatalog
    const item = find(propEq('id', pathId), catalog)
    if (!item) return path

    if (item.childMenu) {
      previousCatalog = item.childMenu
    }
    path.push(item)
  }

  return path
}

export const covertPathToURLQuery = (path) => {
  const idPathString = map((catalog) => catalog.id, path).join('-')
  if (nilOrEmpty(idPathString)) return { [URL_QUERY.NAVI_CATALOG_PATH]: '' }

  return { [URL_QUERY.NAVI_CATALOG_PATH]: idPathString }
}
