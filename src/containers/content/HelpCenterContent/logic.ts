import { useEffect } from 'react'
// import { } from 'ramda'

import { buildLog } from '@/utils'
// import S from './service'
import { VIEW } from './constant'
import { IStore } from './store'

let store: IStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:HelpCenterContent')

/**
 * goto detail help-center article
 */
export const gotoDetail = (): string => {
  store.mark({ view: VIEW.DETAIL })
  return 1
}

// ###############################
// init & uninit handlers
// ###############################

export const useInit = (_store: IStore): void => {
  useEffect(() => {
    store = _store
    log('useInit: ', store)
    // return () => store.reset()
  }, [_store])
}
