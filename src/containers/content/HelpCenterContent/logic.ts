import { useEffect } from 'react'
// import { } from 'ramda'

import { buildLog } from '@/utils/logger'

import type { THelpArticle } from './spec'
import type { TStore } from './store'
import { VIEW } from './constant'

// import S from './service'

let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:HelpCenterContent')

/**
 * goto detail help-center article
 */
export const gotoDetail = (article: THelpArticle): void => {
  log('goto: ', article)
  store?.mark({ view: VIEW.DETAIL })
}

/**
 * useful button on click
 */
export const usefulOnClick = (): void => {
  store?.mark({ uselessClicked: false })
}

/**
 * uesless button on click
 */
export const uselessOnClick = (): void => {
  store?.mark({ uselessClicked: true })
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
