import { useEffect } from 'react'
// import R from 'ramda'

import { buildLog } from '@/utils'
// import S from './service'

let store = null

/* eslint-disable-next-line */
const log = buildLog('L:InterviewContent')

export const topFilterOnChange = () => {}

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
