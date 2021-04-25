import { useEffect } from 'react'
// import { } from 'ramda'

import { buildLog } from '@/utils'

// import S from './service'
import type { TStore } from './store'

let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:AbuseReport')

export const selectItem = (checkedItemRaw: string): void => {
  store.mark({ checkedItemRaw })
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
