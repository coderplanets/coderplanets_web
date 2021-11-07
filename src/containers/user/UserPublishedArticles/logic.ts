import { useEffect } from 'react'
// import { } from 'ramda'

import type { TArticle, TArticleThread, TPagedArticles } from '@/spec'
import { TYPE, ERR, EVENT } from '@/constant'

import { previewArticle, errRescue, titleCase, plural } from '@/utils/helper'
import { buildLog } from '@/utils/logger'
import asyncSuit from '@/utils/async'
import { matchPublishedArticles } from '@/utils/macros'

import S from './schema'
import type { TStore } from './store'

let store: TStore | undefined
let sub$ = null

/* eslint-disable-next-line */
const log = buildLog('L:UserPublishedArticles')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit

const sr71$ = new SR71({
  // @ts-ignore
  receive: [EVENT.PREVIEW_ARTICLE],
})

export const changeTab = (thread: TArticleThread): void => {
  store.mark({ thread })
  loadPublishedArticles()
}

export const loadPublishedArticles = (): void => {
  const { viewingUser: user, isLogin, thread } = store
  const filter = { page: 1, size: 20 }
  const userHasLogin = isLogin

  store.mark({ resState: TYPE.RES_STATE.LOADING })
  sr71$.query(S.getPagedPublishedArticlesSchema(thread), {
    login: user.login,
    filter,
    userHasLogin,
  })
}

/**
 * prepack then send preview event to drawer
 */
const onPreview = (article: TArticle): void => {
  const { resState } = store
  if (resState === TYPE.RES_STATE.LOADING) return

  previewArticle(article)
}

// ###############################
// init & uninit handlers
// ###############################
const handlePagedArticlesRes = (pagedArticles: TPagedArticles): void => {
  const { thread } = store
  const key = `paged${plural(titleCase(thread))}`
  store.markRes({ [key]: pagedArticles })
}

const DataSolver = [
  ...matchPublishedArticles(handlePagedArticlesRes),
  {
    match: asyncRes(EVENT.PREVIEW_ARTICLE),
    action: (res) => {
      const { article } = res[EVENT.PREVIEW_ARTICLE]
      onPreview(article)
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
      if (store.resState === TYPE.RES_STATE.LOADING || !sub$) return
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
