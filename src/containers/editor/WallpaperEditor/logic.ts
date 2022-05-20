import { useEffect } from 'react'
// import { } from 'ramda'

import { buildLog } from '@/utils/logger'

// import S from './schma'
import type { TStore } from './store'

let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:WallpaperEditor')

export const setWallpaper = (wallpaper: string): void => {
  store.mark({ wallpaper })
}

/**
 * toggle pattern mark only for gradient backgrounds
 */
export const togglePattern = (hasPattern: boolean): void => {
  store.mark({ hasPattern })
}

export const toggleBlur = (hasBlur: boolean): void => {
  store.mark({ hasBlur })
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
