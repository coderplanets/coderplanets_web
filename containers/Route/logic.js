import R from 'ramda'

import {
  makeDebugger,
  dispatchEvent,
  EVENT,
  getMainPath,
  getSubPath,
  onClient,
  Global,
  // queryStringToJSON /*  isEmptyNil, getParameterByName */,
} from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Route')
/* eslint-enable no-unused-vars */
dispatchEvent(EVENT.COMMUNITY_CHANGE)

let store = null

export function routeChange() {
  if (onClient) {
    const browserMainPath = getMainPath({ asPath: Global.location.pathname })
    const browserSubPath = getSubPath({ asPath: Global.location.pathname })
    const notCommunityPage = ['user', 'post', 'job']

    /*
       debug('browserMainPath -> ', browserMainPath)
       debug('browserSubPath -> ', browserSubPath)

       debug('store.mainPath: ', store.mainPath)
       debug('store.subPath: ', store.subPath)
     */

    const pathChange =
      store.mainPath !== browserMainPath || store.subPath !== browserSubPath

    if (pathChange) {
      store.markState({ mainPath: browserMainPath, subPath: browserSubPath })

      if (!R.contains(browserMainPath, notCommunityPage))
        return dispatchEvent(EVENT.COMMUNITY_CHANGE)
    }
  }
}

export function init(_store, routeObj) {
  if (store) return false
  store = _store

  // sync init router info
  const mainPath = getMainPath(routeObj)
  const subPath = getSubPath(routeObj)
  const { query } = routeObj
  debug('init routeObj: ', routeObj)

  store.markState({ mainPath, subPath, query })
}
