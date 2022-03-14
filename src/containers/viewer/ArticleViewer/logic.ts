import { useEffect } from 'react'
import { merge } from 'ramda'

import type { TArticle, TWorksTab, TBlogTab, TBlog } from '@/spec'

import { EVENT, ERR, BLOG_TAB } from '@/constant'
import { buildLog } from '@/utils/logger'
import { errRescue, authWarn } from '@/utils/helper'
import asyncSuit from '@/utils/async'
import { scrollDrawerToTop } from '@/utils/dom'
import { matchArticleUpvotes, matchArticles } from '@/utils/macros'

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

export const worksTabOnChange = (tab: TWorksTab): void => {
  store.mark({ tab })
}

export const blogTabOnChange = (tab: TBlogTab): void => {
  store.mark({ tab })
  const blog = store.viewingArticle as TBlog

  if (
    (tab === BLOG_TAB.FEEDS || tab === BLOG_TAB.AUTHOR) &&
    !store.blogRssInfo.title
  ) {
    const args = { rss: blog.rss }
    sr71$.query(S.blogRssInfo, args)
  }
}

export const handleUpvote = (
  article: TArticle,
  viewerHasUpvoted: boolean,
): void => {
  if (!store.isLogin) return authWarn({ hideToast: true })
  const { id, meta } = article

  store.updateUpvote(viewerHasUpvoted)

  const queryLatestUsers = true

  viewerHasUpvoted
    ? sr71$.mutate(S.getUpvoteSchema(meta.thread, queryLatestUsers), { id })
    : sr71$.mutate(S.getUndoUpvoteSchema(meta.thread, queryLatestUsers), { id })
}

const loadArticle = (): void => {
  markLoading()

  const userHasLogin = store.isLogin
  const { id, meta } = store.viewingArticle

  const variables = { id, userHasLogin }
  return sr71$.query(S.getArticleSchema(meta.thread), variables)
}

const markLoading = (maybe = true) => store.mark({ loading: maybe })

const handleArticleRes = (article: TArticle): void => {
  log('# handleArticleRes: ', article)
  markLoading(false)

  const thread = article.meta.thread.toLowerCase()
  const { document, ...restArticle } = article
  store.mark({ document })
  store.setViewing({ [thread]: merge(store.viewingArticle, restArticle) })

  setTimeout(() => {
    const { id, viewerHasUpvoted, views, upvotesCount } = article
    store.syncArticle({
      id,
      viewerHasUpvoted,
      views,
      upvotesCount,
      viewerHasViewed: true,
    })
  }, 2000)
}

const handleUovoteRes = ({ upvotesCount, meta }) => {
  store.updateUpvoteCount(upvotesCount, meta)

  const {
    id,
    viewerHasUpvoted,
    meta: viewingArticleMeta,
  } = store.viewingArticle
  const syncMeta = merge(viewingArticleMeta, meta)
  store.syncArticle({ id, viewerHasUpvoted, upvotesCount, meta: syncMeta })
}

// ###############################
// init & uninit handlers
// ###############################
const DataSolver = [
  ...matchArticleUpvotes(handleUovoteRes),
  ...matchArticles(handleArticleRes),
  {
    match: asyncRes(EVENT.RELOAD_ARTICLE),
    action: () => {
      scrollDrawerToTop()
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

  {
    match: asyncRes('blogRssInfo'),
    action: ({ blogRssInfo }) => {
      log('blogRssInfo: ', blogRssInfo)
      store.mark({ blogRssInfo })
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
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    loadArticle()

    return () => {
      store.reset()
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
