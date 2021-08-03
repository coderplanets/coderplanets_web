import { useEffect } from 'react'
import { merge } from 'ramda'

import { buildLog } from '@/utils/logger'
import { errRescue } from '@/utils/helper'
import asyncSuit from '@/utils/async'

import { EVENT, ERR } from '@/constant'

import S from './schema'
import type { TStore } from './store'

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  // @ts-ignore
  receive: [EVENT.DRAWER.CLOSE],
})

let store: TStore | undefined
let sub$ = null

/* eslint-disable-next-line */
const log = buildLog('L:ArticleViewer')

export const holder = 1

const loadPost = () => {
  const { id } = store.viewingData
  const userHasLogin = store.isLogin
  const variables = { id, userHasLogin }
  markLoading()
  sr71$.query(S.post, variables)
}

const markLoading = (maybe = true) => store.mark({ loading: maybe })

// ###############################
// init & uninit handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('post'),
    action: ({ post }) => {
      store.setViewing({ post: merge(store.viewingData, post) })
      store.syncViewingItem(post)
      markLoading(false)
    },
  },
  {
    match: asyncRes(EVENT.DRAWER.CLOSE),
    action: () => {
      sr71$.stop()
      markLoading(false)
    },
  },
  // {
  //   match: asyncRes('setTag'),
  //   action: () => {
  //     loadPost(store.viewingData)
  //     closeDrawer()
  //     store.setViewing({ post: {} })
  //   },
  // },
  // {
  //   match: asyncRes('unsetTag'),
  //   action: () => {
  //     loadPost(store.viewingData)
  //     closeDrawer()
  //     store.setViewing({ post: {} })
  //   },
  // },
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
      errRescue({ type: ERR.TIMEOUT, details, path: 'PostViewer' }),
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => errRescue({ type: ERR.NETWORK, path: 'PostViewer' }),
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    loadPost()

    return () => {
      // log('effect uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
