import { makeDebugger, getMainPath, getSubPath, Global } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Route')
/* eslint-enable no-unused-vars */
let store = null

// function will fire only when browser history btn clicked
// see https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onpopstate
const browserHistoryBtnClicked = popstate => {
  Global.location = popstate.state.as
}

export function init(_store, routeObj) {
  if (store) return false

  store = _store
  // sync init router info
  const mainPath = getMainPath(routeObj)
  const subPath = getSubPath(routeObj)
  const { query } = routeObj

  store.markState({ mainPath, subPath, query })

  debug('>>>>> init')
  Global.onpopstate = browserHistoryBtnClicked
}

export function uninit() {}
