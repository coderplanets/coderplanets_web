import { useEffect } from 'react'
// import { } from 'ramda'

import { buildLog } from '@/utils'
// import S from './service'
import { VIEW } from './constant'

let store = null

/* eslint-disable-next-line */
const log = buildLog('L:HelpCenterContent')

/**
 * goto detail help-center article
 */
export const gotoDetail = () => {
  store.mark({ view: VIEW.DETAIL })
}

// ###############################
// init & uninit handlers
// ###############################

export const useInit = (_store) => {
  useEffect(() => {
    store = _store
    log('useInit: ', store)
    // return () => store.reset()
  }, [_store])
}
