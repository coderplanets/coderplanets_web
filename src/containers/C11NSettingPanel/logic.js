import { useEffect } from 'react'
import R from 'ramda'

import { EVENT } from '@constant'
import { buildLog, send } from '@utils'
// import S from './service'

let store = null

/* eslint-disable-next-line */
const log = buildLog('L:C11NSettingPanel')

export const onC11NChange = option => {
  // TODO:  currently request to server logic is in containers/header, move it to here ?
  send(EVENT.SET_C11N, { data: option })
  store.updateC11N(option)
  const { curThread: thread } = store

  if (R.has('displayDensity', option)) {
    send(EVENT.C11N_DENSITY_CHANGE, { type: thread })
    //   loadPosts(store.pagedPosts.pageNumber)
  }
}

// ###############################
// init & uninit handlers
// ###############################

export const useInit = _store => {
  useEffect(() => {
    store = _store
    log('useInit: ', store)
    // return () => store.reset()
  }, [_store])
}
