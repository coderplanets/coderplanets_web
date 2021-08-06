import { useEffect } from 'react'

import { buildLog } from '@/utils/logger'
// import S from './service'

import type { TStore } from './store'

let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:WorksContent')

/**
 * change the view of main content
 * @param {string} activeView works or milestone
 */
export const changeView = (activeView: string): void => {
  store.mark({ activeView })
}

export const toggleSidebar = (): void => {
  const { showSidebar } = store

  store.mark({ showSidebar: !showSidebar })
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
