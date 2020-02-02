import { useEffect } from 'react'

import { EVENT } from '@constant'
import { asyncSuit, buildLog, send, updateEditing } from '@utils'

/* eslint-disable-next-line */
const log = buildLog('L:CommunitiesBanner')

const { SR71, $solver } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store = null

export const searchOnChange = e => {
  updateEditing(store, 'searchValue', e)
  send(EVENT.REFRESH_COMMUNITIES, {
    type: 'search',
    data: e.target.value,
  })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = []

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(() => {
    store = _store
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      // log('effect uninit')
      if (!sub$) return false
      log('===== do uninit')
      sub$.unsubscribe()
    }
  }, [_store])
}
