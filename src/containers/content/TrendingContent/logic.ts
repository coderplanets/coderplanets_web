import { useEffect } from 'react'

import { buildLog } from '@/utils/logger'

import type { TStore } from './store'
// import S from './service'

let store = null

/* eslint-disable-next-line */
const log = buildLog('L:TrendingContent')

export const someMethod = () => {
  /* todo */
}

// ###############################
// init & uninit handlers
// ###############################

export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    log('useInit: ', store)
    // return () => store.reset()
  }, [])
}
