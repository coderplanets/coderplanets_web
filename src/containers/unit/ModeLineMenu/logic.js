import { useEffect } from 'react'
// import { } from 'ramda'

import { EVENT } from '@/constant'
import { buildLog, send } from '@/utils'
// import S from './service'

let store = null

/* eslint-disable-next-line */
const log = buildLog('L:ModeLineMenu')

// if current menu has inside panel which has it's own CustomScroller
// then should disableable the Drawer's contnet drag handler
//
// 如果当前 Menu 里面有自己的 CustomScroller, 就需要暂时先禁用 Drawer 自身的
// 否则下滑时会触发下拉关闭
export const disableDrawerContentDrag = () => {
  send(EVENT.DRAWER.CONTENT_DRAGABLE, {
    data: true,
  })
}

// 延迟是防止快速滑动
export const restoreDrawerContentDrag = () => {
  setTimeout(() => {
    send(EVENT.DRAWER.CONTENT_DRAGABLE, {
      data: false,
    })
  }, 500)
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
