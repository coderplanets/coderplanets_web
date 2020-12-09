import { map, keys, find, propEq, last } from 'ramda'
import { Global, nilOrEmpty, serializeQuery } from '@/utils'

export const getCurrentMenuItem = (path, items) => {
  if (nilOrEmpty(path) || nilOrEmpty(items)) return

  const item = find(propEq('id', path[0].id), items)
  if (item.id === last(path).id) return item

  return getCurrentMenuItem(path.slice(1), item?.childMenu)
}

// see original version:
// https://stackoverflow.com/a/15524326
export const findDeep = (data, key, value) => {
  let result = null
  if (data instanceof Array) {
    for (let i = 0; i < data.length; i += 1) {
      // console.log('> the data[i]', data[i])
      result = findDeep(data[i], key, value)
      // end the recursive function
      if (result) return result
    }
    // console.log('-- d --')
  } else {
    const theKeys = keys(data)
    for (let index = 0; index < theKeys.length; index += 1) {
      const prop = theKeys[index]
      if (prop === key && data[prop] === value) {
        return data
      }
      if (data[prop] instanceof Object || data[prop] instanceof Array) {
        result = findDeep(data[prop], key, value)
      }
    }
  }

  return result
}

// findPath by given path-string
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

const covertPathToURLQuery = (path) => {
  const idPathString = map((catalog) => catalog.id, path).join('-')
  if (nilOrEmpty(idPathString)) return ''

  return serializeQuery({ path: idPathString })
}

export const markRoute = (path) => {
  let query = covertPathToURLQuery(path)

  if (nilOrEmpty(query)) query = Global.location.pathname

  Global.history.pushState({}, null, query)
}
