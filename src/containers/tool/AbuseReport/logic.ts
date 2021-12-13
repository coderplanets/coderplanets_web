import { useEffect } from 'react'

import { TYPE, EVENT } from '@/constant'
import asyncSuit from '@/utils/async'
import { buildLog } from '@/utils/logger'

import articleItems from './defaults/article'
import userItems from './defaults/user'
import commentItems from './defaults/comment'
import communityItems from './defaults/community'

// import S from './service'
import type { TStore } from './store'

const { SR71, $solver, asyncRes } = asyncSuit
const sr71$ = new SR71({
  // @ts-ignore
  receive: [EVENT.REPORT],
})

let store: TStore | undefined
let sub$ = null

/* eslint-disable-next-line */
const log = buildLog('L:AbuseReport')

/**
 * go back to select items view
 */
export const goBack = (): void => {
  store.mark({ view: 'main' })
}

/**
 * select one reason, then goto detail view
 */
export const selectItem = (checkedItemRaw: string): void => {
  store.mark({ checkedItemRaw, view: 'detail' })
}

export const close = (): void => store.reset()

const DataResolver = [
  {
    match: asyncRes(EVENT.REPORT),
    action: (res) => {
      const { type } = res[EVENT.REPORT]
      switch (type) {
        // load user info
        case TYPE.REPORT.USER: {
          return store.mark({ type, items: userItems, show: true })
        }

        case TYPE.REPORT.COMMUNITY: {
          return store.mark({ type, items: communityItems, show: true })
        }

        case TYPE.REPORT.COMMENT: {
          return store.mark({ type, items: commentItems, show: true })
        }

        default: {
          return store.mark({ type, items: articleItems, show: true })
        }
      }
    },
  },
]

// ###############################
// init & uninit handlers
// ###############################

export const useInit = (_store: TStore): void => {
  useEffect((): (() => void) => {
    store = _store
    if (!sub$) {
      sub$ = sr71$.data().subscribe($solver(DataResolver, []))
    }
    log('useInit: ', store)
    return () => {
      if (!sub$) return

      store.reset()
      sr71$.stop()
      sub$.unsubscribe()
      sub$ = null
    }
  }, [_store])
}
