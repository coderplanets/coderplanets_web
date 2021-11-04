import { useEffect } from 'react'
// import { } from 'ramda'

import { buildLog } from '@/utils/logger'
// import S from './service'
import type { TStore } from './store'

let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:UserProfile')

export const someMethod = (): void => {
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
  }, [_store])
}
