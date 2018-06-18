import R from 'ramda'

import {
  makeDebugger,
  dispatchEvent,
  EVENT,
  getMainPath,
  getSubPath,
  // queryStringToJSON /*  isEmptyNil, getParameterByName */,
} from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Route')
/* eslint-enable no-unused-vars */

let route = null

const browerHistoryChanged = mainPath => {
  const otherPages = ['user', 'post', 'job']
  if (
    !R.isEmpty(route.mainPath) &&
    !R.contains(mainPath, otherPages) &&
    mainPath !== route.mainPath
  ) {
    /* console.log('=========================') */
    /* console.log('browerHistoryChanged !') */
    /* console.log('=========================') */
    return true
  }
  return false
}

export function syncRoute(routeObj) {
  const mainPath = getMainPath(routeObj)
  const subPath = getSubPath(routeObj)

  const { query /* asPath */ } = routeObj

  /* console.log('syncRoute --> routeObj: ', routeObj) */
  /* console.log('syncRoute --> asPath: ', asPath) */
  /* console.log('syncRoute --> query: ', query) */
  /* console.log('syncRoute parse --> ', queryStringToJSON(asPath)) */

  /* console.log('syncRoute --> mainPath -> ', mainPath) */
  /* console.log('syncRoute --> subPath -> ', subPath) */
  /* console.log('--cur route.mainPath: ', route.mainPath) */

  // NOTE: this only works for brower btn change
  if (browerHistoryChanged(mainPath)) {
    dispatchEvent(EVENT.COMMUNITY_CHANGE)
  }

  route.markState({
    mainPath,
    subPath,
    query,
  })
}

export function init(selectedStore) {
  route = selectedStore
}
