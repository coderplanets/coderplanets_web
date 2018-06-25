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

let store = null

const browerHistoryChanged = (mainPath, subPath) => {
  const otherPages = ['user', 'post', 'job']
  const mainPathChange =
    !R.isEmpty(store.mainPath) &&
    !R.contains(mainPath, otherPages) &&
    mainPath !== store.mainPath

  const subPathChange = !R.isEmpty(store.subPath) && subPath !== store.subPath

  if (mainPathChange || subPathChange) {
    console.log('=========================')
    console.log('browerHistoryChanged !')
    console.log('=========================')
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
  /* console.log('--cur store.mainPath: ', store.mainPath) */

  // NOTE: this only works for brower btn change
  if (browerHistoryChanged(mainPath, subPath)) {
    dispatchEvent(EVENT.COMMUNITY_CHANGE)
  }

  store.markState({
    mainPath,
    subPath,
    query,
  })
}

export function init(_store) {
  if (store) return false
  store = _store
}
