import { useEffect } from 'react'
// import { } from 'ramda'

import { TYPE, ERR, ARTICLE_THREAD } from '@/constant'
import { errRescue } from '@/utils/helper'
import { buildLog } from '@/utils/logger'
import asyncSuit from '@/utils/async'

import S from './schema'
import type { TStore } from './store'

let store: TStore | undefined
let sub$ = null

/* eslint-disable-next-line */
const log = buildLog('L:UserProfile')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit

const sr71$ = new SR71()

export const loadPublishedArticles = (): void => {
  const { viewingUser: user, isLogin } = store
  const filter = { page: 1, size: 30 }
  const userHasLogin = isLogin

  store.mark({ resState: TYPE.RES_STATE.LOADING })
  sr71$.query(S.getPagedPublishedArticlesSchema(ARTICLE_THREAD.POST), {
    login: user.login,
    filter,
    userHasLogin,
  })
}

export const onFollow = (login: string): void => {
  sr71$.mutate(S.follow, { login })
}

export const undoFollow = (login: string): void => {
  sr71$.mutate(S.undoFollow, { login })
}

const loadViewerUser = (): void => {
  const { isLogin, viewingUser } = store
  if (!isLogin) return

  sr71$.query(S.user, { login: viewingUser.login })
}

// ###############################
// init & uninit handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('follow'),
    action: () => loadViewerUser(),
  },
  {
    match: asyncRes('undoFollow'),
    action: () => loadViewerUser(),
  },
  {
    match: asyncRes('pagedPublishedPosts'),
    action: ({ pagedPublishedPosts }) => {
      store.mark({ pagedPosts: pagedPublishedPosts })
      if (store.hasFollowedUser === null) {
        loadViewerUser()
      }
    },
  },
  {
    match: asyncRes('user'),
    action: ({ user }) => {
      store.mark({ hasFollowedUser: user.viewerHasFollowed })
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
    match: asyncErr(ERR.NETWORK),
    action: () => {
      errRescue({ type: ERR.NETWORK, path: 'PublishedArticles' })
    },
  },
]

export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    log('useInit: ', store)
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    loadPublishedArticles()

    return () => {
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
