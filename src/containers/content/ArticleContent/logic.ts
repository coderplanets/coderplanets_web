import { useEffect } from 'react'

import { EVENT, ERR } from '@/constant'
import { isElementInViewport } from '@/utils/dom'
import { errRescue } from '@/utils/helper'
import { buildLog } from '@/utils/logger'
import asyncSuit from '@/utils/async'

import type { TStore } from './store'
import S from './schema'

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  /* @ts-ignore */
  receive: [EVENT.REFRESH_POSTS],
})

let sub$ = null
let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:PostContent')

export const checkAnchor = (el: HTMLElement): void =>
  isElementInViewport(el) ? articleInAnchor() : articleOutAnchor()

export const articleInAnchor = (): void => {
  if (store) store.mark({ articleInViewport: true })
}

export const articleOutAnchor = (): void => {
  if (store) store.mark({ articleInViewport: false })
}

const loadPost = (): void => {
  const { id } = store.viewingArticle
  sr71$.query(S.post, { id, userHasLogin: store.isLogin })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('post'),
    action: ({ post }) => store.setViewing({ post }),
  },
  {
    match: asyncRes(EVENT.REFRESH_POSTS),
    action: () => loadPost(),
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
      errRescue({ type: ERR.TIMEOUT, details, path: 'PostContent' }),
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => errRescue({ type: ERR.NETWORK, path: 'PostContent' }),
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
    return () => {
      if (!sub$) return
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
