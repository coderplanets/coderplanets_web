import { useEffect } from 'react'
// import R from 'ramda'

import { buildLog } from '@/utils'
// import S from './service'

let store = null

/* eslint-disable-next-line */
const log = buildLog('L:WorksContent')

/**
 * change the view of main content
 * @param {string} activeView works or milestone
 */
export const changeView = activeView => {
  store.mark({ activeView })
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
