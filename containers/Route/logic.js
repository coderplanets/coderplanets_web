import { useEffect } from 'react'
import { makeDebugger, getMainPath, getSubPath, Global } from '@utils'

/* eslint-disable-next-line */
const debug = makeDebugger('L:Route')

let store = null

// function will fire only when browser history btn clicked
// see https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onpopstate
const browserHistoryBtnClicked = popstate => {
  Global.location = popstate.state.as
}

export const init = (_store, routeObj) => {
  if (store) return false

  store = _store
  // sync init router info
  const mainPath = getMainPath(routeObj)
  const subPath = getSubPath(routeObj)
  const { query } = routeObj

  store.markState({ mainPath, subPath, query })

  Global.onpopstate = browserHistoryBtnClicked
}

export const uninit = () => {}

// ###############################
// init & uninit
// ###############################

export const useInit = (_store, routeObj) => {
  useEffect(
    () => {
      store = _store
      // sync init router info
      const mainPath = getMainPath(routeObj)
      const subPath = getSubPath(routeObj)
      const { query } = routeObj

      store.markState({ mainPath, subPath, query })

      Global.onpopstate = browserHistoryBtnClicked
    },
    [_store, routeObj]
  )
}

export const holder = 1
