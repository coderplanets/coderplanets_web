import { useEffect } from 'react'
// import { } from 'ramda'

import { buildLog } from '@/utils'

import type { TStore } from './store'
import { VIEW } from './constant'

// import S from './service'

let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:HelpCenterContent')

/**
 * goto detail help-center article
 */
export const gotoDetail = (): void => {
  store?.mark({ view: VIEW.DETAIL })
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
