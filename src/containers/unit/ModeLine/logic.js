import { useEffect } from 'react'
// import { } from 'ramda'

import { TYPE, EVENT } from '@/constant'
import { send, buildLog } from '@/utils'
// import S from './service'

let store = null

/* eslint-disable-next-line */
const log = buildLog('L:ModeLine')

export const openMobileNaviMenu = () => {
  send(EVENT.DRAWER_OPEN, {
    type: TYPE.DRAWER.MOBILE_NAVI_MENU,
    options: {
      direction: 'bottom',
      position: 'H',
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
