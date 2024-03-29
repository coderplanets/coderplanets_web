import { useEffect } from 'react'

import { ERR, GUIDE } from '@/constant'
import { errRescue } from '@/utils/helper'
import asyncSuit from '@/utils/async'
import { buildLog } from '@/utils/logger'

import type { TStore } from './store'

const { SR71, $solver, asyncErr } = asyncSuit
// import S from './schema'

const sr71$ = new SR71()
let sub$ = null
let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:CoolGuideContent')

/**
 * navi menu on select
 *
 * @param {string} activeMenuId, actived menu id
 * @param {string} displayType, content display type
 */
export const menuOnSelect = (
  activeMenuId: string,
  displayType = 'DEFAULT',
): void => {
  store.mark({ activeMenuId, displayType })
}

export const goHomeContent = (): void => {
  store.mark({ displayType: GUIDE.HOME })
}

/**
 * favorite or latestUpdated filter change
 *
 * @param {string} topFilter
 */
export const topFilterOnChange = (topFilter: string): void => {
  store.mark({ topFilter })
}

// const const cancelLoading = () => {}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {
      // cancelLoading()
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      // cancelLoading()
      errRescue({ type: ERR.TIMEOUT, details, path: 'CoolGuideContent' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      // cancelLoading()
      errRescue({ type: ERR.NETWORK, path: 'CoolGuideContent' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store: TStore) => {
  useEffect(() => {
    store = _store

    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      if (!sub$) return
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
