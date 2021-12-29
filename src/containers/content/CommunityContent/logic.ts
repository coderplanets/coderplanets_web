import { useEffect } from 'react'
import { values, includes } from 'ramda'

import type { TThread } from '@/spec'
import { ERR, EVENT, ARTICLE_THREAD } from '@/constant'

import { send, errRescue, plural } from '@/utils/helper'
import asyncSuit from '@/utils/async'
import { buildLog } from '@/utils/logger'

import type { TStore } from './store'

/* eslint-disable-next-line */
const log = buildLog('L:CommunityContent')

// import S from './schema'
const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  // @ts-ignore
  receive: [EVENT.COMMUNITY_THREAD_CHANGE],
})

let store: TStore | undefined
let sub$ = null

/**
 * tab 改变时统一同步路由和 viewing, 以便在下层收到广播后 viewing 已经就绪
 */
const tabOnChange = (activeThread: TThread): void => {
  const { curCommunity } = store

  const mainPath = curCommunity.raw
  const subPath =
    activeThread !== ARTICLE_THREAD.POST ? plural(activeThread) : ''

  // store.setViewing({ activeThread })
  store.setCurThread(activeThread)
  store.markRoute({ mainPath, subPath })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes(EVENT.COMMUNITY_THREAD_CHANGE),
    action: (res) => {
      const { data } = res[EVENT.COMMUNITY_THREAD_CHANGE]
      tabOnChange(data)
      if (includes(data, values(ARTICLE_THREAD))) {
        return send(EVENT.ARTICLE_THREAD_CHANGE, { data })
      }
      // TODO: other THREAD
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {
      /** */
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      errRescue({ type: ERR.TIMEOUT, details, path: 'CommunityContent' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      errRescue({ type: ERR.NETWORK, path: 'CommunityContent' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    log('effect init', store)
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      // log('effect uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}

export const holder = 1
