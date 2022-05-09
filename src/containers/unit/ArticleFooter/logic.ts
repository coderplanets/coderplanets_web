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

export const onFollow = (login: string): void => {
  sr71$.mutate(S.follow, { login })
}

export const undoFollow = (login: string): void => {
  sr71$.mutate(S.undoFollow, { login })
}

const loadArticleAuthor = (): void => {
  const { viewingArticle, isLogin } = store

  if (!isLogin) return

  const { author } = viewingArticle

  sr71$.query(S.user, { login: author.login })
}

// ###############################
// init & uninit handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('follow'),
    action: () => loadArticleAuthor(),
  },
  {
    match: asyncRes('undoFollow'),
    action: () => loadArticleAuthor(),
  },
  {
    match: asyncRes('user'),
    action: ({ user }) => {
      store.mark({ hasFollowedAuthor: user.viewerHasFollowed })
    },
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

    loadArticleAuthor()
    // return () => store.reset()
    return () => {
      // log('effect uninit')
      store.reset()
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
