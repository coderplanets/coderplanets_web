import { useEffect } from 'react'
// import { } from 'ramda'

import { TYPE, EVENT } from '@/constant'
import { send, buildLog, thread2Subpath } from '@/utils'
// import S from './service'

let store = null

/* eslint-disable-next-line */
const log = buildLog('L:ModeLine')

/**
 * open global navi menu on mobile
 */
export const openGlobalMenu = () => {
  send(EVENT.DRAWER_OPEN, {
    type: TYPE.DRAWER.MODELINE_MENU,
    data: TYPE.MM_TYPE.GLOBAL_MENU,
    options: {
      direction: 'bottom',
      position: 'M',
    },
  })
}

/**
 * open more menu on mobile
 */
export const openMoreMenu = () => {
  send(EVENT.DRAWER_OPEN, {
    type: TYPE.DRAWER.MODELINE_MENU,
    data: TYPE.MM_TYPE.MORE,
    options: {
      direction: 'bottom',
      position: 'L',
    },
  })
}

export const tabOnChange = (activeThread) => {
  const subPath = thread2Subpath(activeThread)
  // log('EVENT.activeThread -----> ', activeThread)
  // log('EVENT.subPath -----> ', subPath)

  store.markRoute({ subPath })
  store.setViewing({ activeThread })

  send(EVENT.THREAD_CHANGE, { data: { activeThread, topic: subPath } })
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
