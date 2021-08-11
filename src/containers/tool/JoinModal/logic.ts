import { useEffect } from 'react'

import { EVENT } from '@/constant'
import asyncSuit from '@/utils/async'
import { buildLog } from '@/utils/logger'

import type { TStore } from './store'

const { SR71, asyncRes, $solver } = asyncSuit
const sr71$ = new SR71({
  // @ts-ignore
  receive: [EVENT.JOIN_US],
})

let store: TStore | undefined
let sub$ = null

/* eslint-disable-next-line */
const log = buildLog('L:JoinModal')

export const switchGroup = (activeGroup: string): void => {
  store.mark({ activeGroup })
}

/**
 * close current modal
 */
export const onClose = (): void => store.mark({ show: false })

const DataResolver = [
  {
    match: asyncRes(EVENT.JOIN_US),
    action: () => {
      store.mark({ show: true })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    log(store)
    if (!sub$) {
      sub$ = sr71$.data().subscribe($solver(DataResolver, []))
    }

    return () => {
      if (!sub$) return
      sr71$.stop()
      sub$.unsubscribe()
      sub$ = null
    }
  }, [_store])
}
