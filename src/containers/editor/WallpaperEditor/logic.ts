import { useEffect } from 'react'
// import { } from 'ramda'

import { buildLog } from '@/utils/logger'
import { EVENT } from '@/constant'
import asyncSuit from '@/utils/async'

// import S from './schma'
import type { TTab } from './spec'
import type { TStore } from './store'

const { SR71, $solver, asyncRes } = asyncSuit
const sr71$ = new SR71({
  receive: EVENT.DRAWER.AFTER_CLOSE,
})

let store: TStore | undefined
let sub$ = null

/* eslint-disable-next-line */
const log = buildLog('L:WallpaperEditor')

export const changeTab = (tab: TTab): void => {
  store.mark({ tab })
}

export const changeDirection = (direction: string): void => {
  store.mark({ direction })
}

export const changeWallpaper = (wallpaper: string): void => {
  store.mark({ wallpaper })
}

export const rollbackEdit = (): void => store.rollbackEdit()

/**
 * toggle pattern mark only for gradient backgrounds
 */
export const togglePattern = (hasPattern: boolean): void => {
  store.mark({ hasPattern })
}

export const toggleBlur = (hasBlur: boolean): void => {
  store.mark({ hasBlur })
}

const DataResolver = [
  {
    match: asyncRes(EVENT.DRAWER.AFTER_CLOSE),
    action: () => store.reset(),
  },
]

// ###############################
// init & uninit handlers
// ###############################

export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    if (!sub$) {
      sub$ = sr71$.data().subscribe($solver(DataResolver, []))
    }
    // return () => store.reset()
  }, [_store])
}
