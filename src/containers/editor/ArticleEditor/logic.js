import { useEffect } from 'react'
// import { } from 'ramda'

import { buildLog } from '@/utils/logger'

import { STEP } from './constant'
// import S from './service'

let store = null

/* eslint-disable-next-line */
const log = buildLog('L:ArticleEditor')

export const previousStep = () => {
  store.mark({ step: STEP.EDIT })
}

export const nextStep = () => {
  store.mark({ step: STEP.SETTING })
}

export const toggleSubTitle = (showSubTitle) => {
  store.mark({ showSubTitle })
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
