import { useEffect } from 'react'
import { includes } from 'ramda'

import type { TArticle, TThread, TArticleFilter } from '@/spec'
import { TYPE, EVENT, ERR, THREAD } from '@/constant'

import { scrollToHeader } from '@/utils/dom'
import asyncSuit from '@/utils/async'
import { buildLog } from '@/utils/logger'
import { errRescue, plural, previewArticle, authWarn } from '@/utils/helper'
import { matchPagedArticles, matchArticleUpvotes } from '@/utils/macros'

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
    EVENT.C11N_DENSITY_CHANGE,
    EVENT.UPVOTE_ON_ARTICLE_LIST,
  ],
})

let store: TStore | undefined
let sub$ = null

export const inAnchor = (): void => store?.showTopModeline(false)
export const outAnchor = (): void => store?.showTopModeline(true)

export const onSearch = (v: string): void => {
  store.mark({ mode: 'search', searchValue: v })
}

export const closeSearch = (): void => {
  store.mark({ mode: 'default' })
}

export const onFilterSelect = (option: TArticleFilter): void => {
  store.selectFilter(option)
  // console.log('cur filter: ', store.filtersData)
  loadArticles()
}

/**
 * load paged articles then save them to store
 */
const loadArticles = (page = 1): void => {
  scrollToHeader()
  doQuery(page)
  // store.markRoute({ tag: tag.raw })
  store.markRoute({ page })
}

// do query paged articles
const doQuery = (page: number): void => {
  const args = store.getLoadArgs(page)
  log('args: ', args)
  sr71$.query(S.getPagedArticlesSchema(store.curThread), args)
}

/**
 * prepack then send preview event to drawer
 */
const onPreview = (article: TArticle): void => {
  const { resState } = store
  if (resState === TYPE.RES_STATE.LOADING) return

  previewArticle(article)
}

const handleUpvote = (article: TArticle, viewerHasUpvoted: boolean): void => {
  if (!store.isLogin) return authWarn({ hideToast: true })
  const { id, meta } = article

  store.updateUpvote(id, viewerHasUpvoted)
  const queryLatestUsers = includes(article.meta.thread.toLowerCase(), [
    THREAD.RADAR,
    THREAD.JOB,
  ])

  viewerHasUpvoted
    ? sr71$.mutate(S.getUpvoteSchema(meta.thread, queryLatestUsers), { id })
    : sr71$.mutate(S.getUndoUpvoteSchema(meta.thread, queryLatestUsers), { id })
}

const handleUovoteRes = ({ id, upvotesCount, meta }) => {
  log('# handleUovoteRes: ', meta)
  store.updateUpvoteCount(id, upvotesCount, meta)
}

const handlePagedArticlesRes = (thread: TThread, pagedArticles): void => {
  const key = `paged${plural(thread, 'titleCase')}`
  log('>> pagedArticles -> ', pagedArticles)
  store.markRes({ [key]: pagedArticles })
}

// ###############################
// Data & Error handlers
// ###############################
const DataSolver = [
  ...matchPagedArticles(
    [THREAD.POST, THREAD.BLOG, THREAD.JOB, THREAD.RADAR, THREAD.WORKS],
    handlePagedArticlesRes,
  ),
  ...matchArticleUpvotes(handleUovoteRes),
  {
    match: asyncRes(EVENT.COMMUNITY_CHANGE),
    action: () => {
      log('EVENT.COMMUNITY_CHANGE')
      loadArticles()
    },
  },
  {
    match: asyncRes(EVENT.ARTICLE_THREAD_CHANGE),
    action: () => {
      // 之前如果请求过，那么 GraphQL 会被缓存，不必重复请求
      if (store.isEmpty) loadArticles()
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
    match: asyncRes(EVENT.UPVOTE_ON_ARTICLE_LIST),
    action: (res) => {
      const { article, viewerHasUpvoted } = res[EVENT.UPVOTE_ON_ARTICLE_LIST]
      handleUpvote(article, viewerHasUpvoted)
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
export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    store.afterInitLoading()
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    // if (store.isEmpty) loadArticles()

    return () => {
      if (store.resState === TYPE.RES_STATE.LOADING || !sub$) return
      // log('===== do uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
