import { useEffect } from 'react'
// import { } from 'ramda'

import { TYPE, EVENT } from '@/constant'
import { send, buildLog } from '@/utils'
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
