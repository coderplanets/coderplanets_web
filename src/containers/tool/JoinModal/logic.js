import { useEffect } from 'react'

import { EVENT } from '@/constant'
import { asyncSuit, buildLog } from '@/utils'

const { SR71, asyncRes, $solver } = asyncSuit
const sr71$ = new SR71({
  receive: [EVENT.JOIN_US],
})

let store = null
let sub$ = null

/* eslint-disable-next-line */
const log = buildLog('L:JoinModal')

/**
 * close current modal
 */
export const onClose = () => store.mark({ show: false })

const DataResolver = [
  {
    match: asyncRes(EVENT.JOIN_US),
    action: (data) => {
      console.log('--> EVENT.JOIN_US: ', data)
      store.mark({ show: true })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store) => {
  useEffect(() => {
    store = _store
    log(store)
    if (!sub$) {
      sub$ = sr71$.data().subscribe($solver(DataResolver, []))
    }

    return () => {
      if (!sub$) return false
      sr71$.stop()
      sub$.unsubscribe()
      sub$ = null
    }
  }, [_store])
}
