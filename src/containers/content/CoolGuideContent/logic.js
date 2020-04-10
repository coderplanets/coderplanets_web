// import R from 'ramda'
import { useEffect } from 'react'

import { ERR } from '@constant'
import { buildLog, $solver, asyncErr, errRescue } from '@utils'

import SR71 from '@utils/async/sr71'
// import S from './schema'

const sr71$ = new SR71()
let sub$ = null
let store = null

/* eslint-disable-next-line */
const log = buildLog('L:CoolGuideContent')

/**
 * navi menu on select
 *
 * @param {string} activeMenuId, actived menu id
 * @param {string} displayType, content display type
 */
export const menuOnSelect = (activeMenuId, displayType = 'DEFAULT') => {
  store.mark({ activeMenuId, displayType })
}

/**
 * favorite or latestUpdated filter change
 *
 * @param {string} topFilter
 */
export const topFilterOnChange = topFilter => {
  store.mark({ topFilter })
}

// const const cancleLoading = () => {}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {
      // cancleLoading()
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      // cancleLoading()
      errRescue({ type: ERR.TIMEOUT, details, path: 'CoolGuideContent' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      // cancleLoading()
      errRescue({ type: ERR.NETWORK, path: 'CoolGuideContent' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(() => {
    store = _store

    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    return () => {
      if (!sub$) return false
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
