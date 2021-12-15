import { useEffect } from 'react'
import { has } from 'ramda'

import type { TThemeName } from '@/spec'
import { EVENT } from '@/constant'
import { send } from '@/utils/helper'
import { buildLog } from '@/utils/logger'
// import S from './service'
import type { TStore } from './store'

let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:C11NSettingPanel')

export const tabOnChange = (activeTab: string): void =>
  store.mark({ activeTab })

export const changeTheme = (theme: TThemeName): void => {
  store.changeTheme(theme)
  send(EVENT.SET_C11N, { data: { theme } })
}

export const onC11NChange = (option): void => {
  // TODO:  currently request to server logic is in containers/header, move it to here ?
  send(EVENT.SET_C11N, { data: option })
  store.updateC11N(option)
  const { curThread: thread } = store

  if (has('displayDensity', option)) {
    send(EVENT.C11N_DENSITY_CHANGE, { type: thread })
    //   loadPosts(store.pagedPosts.pageNumber)
  }
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
