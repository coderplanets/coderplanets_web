import { useEffect } from 'react'
// import { } from 'ramda'

import { buildLog } from '@/utils/logger'

import type { TTab } from './spec'
// import S from './schma'
import type { TStore } from './store'

let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:DashboardThread')

export const tabOnChange = (curTab: TTab): void => {
  store.mark({ curTab })
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
