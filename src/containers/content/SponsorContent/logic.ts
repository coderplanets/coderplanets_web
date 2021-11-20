import { useEffect } from 'react'

import { buildLog } from '@/utils/logger'

import type { TStore } from './store'
// import S from './service'

let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:SponsorContent')

export const toggleBannerVisiable = (bannerVisiable: boolean): void => {
  store.mark({ bannerVisiable })
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
