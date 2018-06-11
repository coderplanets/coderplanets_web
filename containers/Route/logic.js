import R from 'ramda'

import { makeDebugger /*  isEmptyNil, getParameterByName */ } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Route')
/* eslint-enable no-unused-vars */

let route = null
const INDEX = ''

// example: /getme/xxx?aa=bb&cc=dd
const parseMainPath = R.compose(
  R.head,
  R.split('?'),
  R.head,
  R.reject(R.isEmpty),
  R.split('/'),
  R.prop('asPath')
)

// example: /xxx/getme?aa=bb&cc=dd
const parseSubPathList = R.compose(
  R.reject(R.isEmpty),
  R.split('/'),
  R.head,
  R.reject(R.contains('=')),
  R.reject(R.isEmpty),
  R.split('?'),
  R.prop('asPath')
)

const getMainPath = routeObj => {
  if (R.isEmpty(routeObj)) return INDEX
  if (routeObj.asPath === '/') return INDEX

  return parseMainPath(routeObj)
}

const getSubPath = routeObj => {
  if (R.isEmpty(routeObj)) return INDEX
  if (routeObj.asPath === '/') return INDEX

  const asPathList = parseSubPathList(routeObj)

  return asPathList.length > 1 ? asPathList[1] : asPathList[0]
}

export function syncRoute(routeObj) {
  const mainPath = getMainPath(routeObj)
  const subPath = getSubPath(routeObj)

  const { query } = routeObj

  /* console.log('syncRoute --> routeObj: ', routeObj) */
  /* console.log('syncRoute --> query: ', query) */

  route.markState({
    mainPath,
    subPath,
    query,
  })
}

export function init(selectedStore) {
  route = selectedStore
}
