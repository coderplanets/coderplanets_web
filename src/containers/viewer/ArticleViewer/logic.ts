import { useEffect } from 'react'
import { merge } from 'ramda'

import type { TArticle } from '@/spec'

import { EVENT, ERR } from '@/constant'
import { buildLog } from '@/utils/logger'
import { errRescue, authWarn } from '@/utils/helper'
import asyncSuit from '@/utils/async'
import { matchArticleUpvotes } from '@/utils/macros'

import S from './schema'
import type { TStore } from './store'

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  // @ts-ignore
  receive: [EVENT.DRAWER.CLOSE, EVENT.RELOAD_ARTICLE],
})

let store: TStore | undefined
let sub$ = null

/* eslint-disable-next-line */
const log = buildLog('L:ArticleViewer')

export const handleUpvote = (
  article: TArticle,
  viewerHasUpvoted: boolean,
): void => {
  if (!store.isLogin) return authWarn({ hideToast: true })
  const { id, meta } = article

  store.updateUpvote(viewerHasUpvoted)

  viewerHasUpvoted
    ? sr71$.mutate(S.getUpvoteSchema(meta.thread), { id })
    : sr71$.mutate(S.getUndoUpvoteSchema(meta.thread), { id })
}

const loadArticle = (): void => {
  const userHasLogin = store.isLogin
  const { id, meta } = store.viewingArticle

  const variables = { id, userHasLogin }
  markLoading()
  return sr71$.query(S.getArticleSchema(meta.thread), variables)
}

const markLoading = (maybe = true) => store.mark({ loading: maybe })

const handleArticleLoaded = (article: TArticle): void => {
  console.log('handleArticleLoaded: ', article)

  const thread = article.meta.thread.toLowerCase()
  store.setViewing({ [thread]: merge(store.viewingArticle, article) })
  store.syncViewingItem(article)
  markLoading(false)
}

// ###############################
// init & uninit handlers
// ###############################
const handleUovoteRes = ({ upvotesCount }) => {
  store.updateUpvoteCount(upvotesCount)

  const { id, meta } = store.viewingArticle
  const variables = { id, userHasLogin: true }
  sr71$.query(S.getArticleSchema(meta.thread), variables)
}

const DataSolver = [
  ...matchArticleUpvotes(handleUovoteRes),
  {
    match: asyncRes('post'),
    action: ({ post }) => handleArticleLoaded(post),
  },
  {
    match: asyncRes('job'),
    action: ({ job }) => handleArticleLoaded(job),
  },
  {
    match: asyncRes('blog'),
    action: ({ blog }) => handleArticleLoaded(blog),
  },
  {
    match: asyncRes('works'),
    action: ({ works }) => {
      console.log('got works:', works)
      store.setViewing({ works: merge(store.viewingArticle, works) })
      // store.syncViewingItem(works) // do in works content
      markLoading(false)
    },
  },
  {
    match: asyncRes(EVENT.RELOAD_ARTICLE),
    action: () => {
      markLoading(true)
      loadArticle()
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
  //     loadPost(store.viewingArticle)
  //     closeDrawer()
  //     store.setViewing({ post: {} })
  //   },
  // },
  // {
  //   match: asyncRes('unsetTag'),
  //   action: () => {
  //     loadPost(store.viewingArticle)
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
    loadArticle()

    return () => {
      // log('effect uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
