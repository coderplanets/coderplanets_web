import { useEffect } from 'react'

import type { TArticle, TArticleFilter } from '@/spec'
import { TYPE, EVENT, ERR } from '@/constant'

import {
  asyncSuit,
  buildLog,
  send,
  errRescue,
  scrollToTabber,
  titleCase,
} from '@/utils'

import type { TStore } from './store'
import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:ArticlesThread')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  // @ts-ignore
  receive: [
    EVENT.PREVIEW_ARTICLE,
    EVENT.REFRESH_ARTICLES,
    EVENT.ARTICLE_THREAD_CHANGE,
    EVENT.COMMUNITY_CHANGE,
    EVENT.THREAD_CHANGE,
    EVENT.C11N_DENSITY_CHANGE,
  ],
})

let store: TStore | undefined
let sub$ = null

export const inAnchor = (): void => store?.showTopModeline(false)
export const outAnchor = (): void => store?.showTopModeline(true)

export const onFilterSelect = (option: TArticleFilter): void => {
  store.selectFilter(option)
  log('cur filter: ', store.filtersData)
  store.markRoute({ ...store.filtersData })
  loadArticles()
}

/**
 * load paged articles then save them to store
 */
const loadArticles = (page = 1): void => {
  scrollToTabber()
  doQuery(page)
  store.markRoute({ page, ...store.filtersData })
}

// do query paged articles
const doQuery = (page: number): void => {
  const endpoint = S[`paged${titleCase(store.curThread)}s`]
  const args = store.getLoadArgs(page)
  sr71$.query(endpoint, args)
}

/**
 * prepack then send preview event to drawer
 */
const onPreview = (article: TArticle): void => {
  const { curThread, setViewedFlag, resState } = store
  if (resState === TYPE.RES_STATE.LOADING) return

  setTimeout(() => setViewedFlag(article.id), 1500)

  const type = TYPE.DRAWER[`${curThread.toUpperCase()}_VIEW`]
  const thread = curThread

  send(EVENT.DRAWER.OPEN, { type, thread, data: article })
}

// ###############################
// Data & Error handlers
// ###############################
const DataSolver = [
  {
    match: asyncRes('pagedPosts'),
    action: ({ pagedPosts }) => store.markRes({ pagedPosts }),
  },
  {
    match: asyncRes(EVENT.COMMUNITY_CHANGE),
    action: () => loadArticles(),
  },
  {
    match: asyncRes(EVENT.ARTICLE_THREAD_CHANGE),
    action: (res) => {
      console.log('EVENT.ARTICLE_THREAD_CHANGE in articleThread')
      // const { data } = res[EVENT.THREAD_CHANGE]
      // loadArticles()
    },
  },
  {
    match: asyncRes(EVENT.PREVIEW_ARTICLE),
    action: (res) => {
      const { article } = res[EVENT.PREVIEW_ARTICLE]
      onPreview(article)
    },
  },
  {
    match: asyncRes(EVENT.REFRESH_ARTICLES),
    action: (res) => {
      const { page = 1 } = res[EVENT.REFRESH_ARTICLES]
      loadArticles(page)
    },
  },
  {
    match: asyncRes(EVENT.C11N_DENSITY_CHANGE),
    action: () => loadArticles(store.pagedArticlesData.pageNumber),
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
    action: ({ details }) => {
      errRescue({ type: ERR.TIMEOUT, details, path: 'PostsThread' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      errRescue({ type: ERR.NETWORK, path: 'PostsThread' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store: TStore): void =>
  useEffect(() => {
    store = _store
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      if (store.resState === TYPE.RES_STATE.LOADING || !sub$) return
      // log('===== do uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
