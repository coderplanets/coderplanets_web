import { useEffect } from 'react'
// import { } from 'ramda'

import { buildLog, asyncSuit } from '@/utils'
import { EVENT } from '@/constant'

// import S from './schma'
import type { TStore } from './store'

const { SR71, $solver, asyncRes } = asyncSuit

const sr71$ = new SR71({
  receive: EVENT.SHARE,
})

let store: TStore | undefined
let sub$ = null

/* eslint-disable-next-line */
const log = buildLog('L:Share')

export const close = (): void => {
  store.mark({ show: false })
}

// ###############################
// init & uninit handlers
// ###############################

const DataResolver = [
  {
    match: asyncRes(EVENT.SHARE),
    action: () => {
      console.log('share 接收到信号')
      store.mark({ show: true })
    },
  },
]

export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store

    console.log('======= init the fuck 0')
    if (!sub$) {
      console.log('======= init the fuck')
      sub$ = sr71$.data().subscribe($solver(DataResolver, []))
    }

    log('useInit: ', store)
    // return () => store.reset()
  }, [_store])
}
