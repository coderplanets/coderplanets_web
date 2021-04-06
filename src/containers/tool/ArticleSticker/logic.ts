import { useEffect } from 'react'
// import { } from 'ramda'

import { buildLog } from '@/utils'
// import S from './service'
import type { TStore } from './store'

let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:ArticleSticker')

export const toggleTocMenu = (): void => {
  const isTocMenuOpened = !store.isTocMenuOpened
  const isLeftStickerLocked = isTocMenuOpened

  store.mark({ isTocMenuOpened, isLeftStickerLocked })
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
