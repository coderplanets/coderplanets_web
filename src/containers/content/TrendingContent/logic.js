import { useEffect } from 'react'
// import R from 'ramda'

import { buildLog } from '@utils'
// import S from './service'

let store = null

/* eslint-disable-next-line */
const log = buildLog('L:TrendingContent')

export const someMethod = () => {}

// ###############################
// init & uninit handlers
// ###############################

export const useInit = _store => {
  useEffect(() => {
    store = _store
    log('useInit: ', store)
    // return () => store.reset()
  }, [])
}
