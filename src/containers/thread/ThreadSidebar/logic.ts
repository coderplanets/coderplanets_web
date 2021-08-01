import { useEffect } from 'react'
// import { } from 'ramda'

import { TYPE, EVENT } from '@/constant'
import { send } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

// import S from './service'
import type { TStore } from './store'

let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:ThreadSidebar')

export const onCreate = (): void => {
  const { isLogin, curThread, authWarning } = store
  if (!isLogin) return authWarning()
  const cmd = `${curThread.toUpperCase()}_CREATE`

  send(EVENT.DRAWER.OPEN, { type: TYPE.DRAWER[cmd] })
}

export const onTagSelect = (): void => send(EVENT.REFRESH_ARTICLES)

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
