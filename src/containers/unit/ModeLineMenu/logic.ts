import { useEffect } from 'react'
// import { } from 'ramda'

import { EVENT, TYPE } from '@/constant'
import { send, report } from '@/utils/helper'
import { buildLog } from '@/utils/logger'
// import S from './service'

import type { TStore } from './store'

let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:ModeLineMenu')

export const openMenu = (activeMenu: string): void => {
  switch (activeMenu) {
    case TYPE.MM_TYPE.COLLECT: {
      return openCollectionMenu()
    }

    case TYPE.MM_TYPE.REPORT: {
      return openReportMenu()
    }

    default: {
      // eslint-disable-next-line no-useless-return
      return
    }
  }
}

/**
 * open global navi menu on mobile
 */
const openCollectionMenu = () => {
  send(EVENT.DRAWER.OPEN, {
    type: TYPE.DRAWER.MODELINE_MENU,
    data: TYPE.MM_TYPE.COLLECT,
    options: {
      direction: 'bottom',
      position: 'M',
    },
  })
}

const openReportMenu = () => {
  setTimeout(() => report('ARTICLE'), 1000)

  send(EVENT.DRAWER.OPEN, {
    type: TYPE.DRAWER.MODELINE_MENU,
    data: TYPE.MM_TYPE.REPORT,
    options: {
      direction: 'bottom',
      position: 'M',
    },
  })
}

// if current menu has inside panel which has it's own CustomScroller
// then should disableable the Drawer's contnet drag handler
//
// 如果当前 Menu 里面有自己的 CustomScroller, 就需要暂时先禁用 Drawer 自身的
// 否则下滑时会触发下拉关闭
export const disableDrawerContentDrag = (): void => {
  send(EVENT.DRAWER.CONTENT_DRAGABLE, {
    data: true,
  })
}

// 延迟是防止快速滑动
export const restoreDrawerContentDrag = (): void => {
  setTimeout(() => {
    send(EVENT.DRAWER.CONTENT_DRAGABLE, {
      data: false,
    })
  }, 500)
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
