import { useEffect } from 'react'
// import { } from 'ramda'

import { ERR } from '@/constant'

import { errRescue } from '@/utils/helper'
import { buildLog } from '@/utils/logger'
import asyncSuit from '@/utils/async'

import type { TStore } from './store'
import S from './schema'

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:ArticleFooter')

export const toggleActionPanel = (curActionPanelType): void => {
  const { showActionPanel, actionPanelType } = store
  if (curActionPanelType === actionPanelType) {
    store.mark({ showActionPanel: !showActionPanel, actionPanelType })
  } else {
    store.mark({ showActionPanel: true, actionPanelType: curActionPanelType })
  }
}

export const onFollow = (login: string): void =>
  sr71$.mutate(S.follow, { login })
export const undoFollow = (login: string): void =>
  sr71$.mutate(S.undoFollow, { login })

// ###############################
// init & uninit handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('follow'),
    action: () => store.mark({ hasFollowedAuthor: true }),
  },
  {
    match: asyncRes('undoFollow'),
    action: () => store.mark({ hasFollowedAuthor: false }),
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {
      //
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) =>
      errRescue({ type: ERR.TIMEOUT, details, path: 'ArticleFooter' }),
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => errRescue({ type: ERR.NETWORK, path: 'ArticleFooter' }),
  },
]

export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    log('useInit: ', store)
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    // return () => store.reset()
    return () => {
      // log('effect uninit')
      store.reset()
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
