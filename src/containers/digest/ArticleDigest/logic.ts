import { useEffect } from 'react'

import type { TScrollDirection, TWorksTab, TBlog } from '@/spec'
import { EVENT, ERR, BLOG_TAB } from '@/constant'
import asyncSuit from '@/utils/async'
import { send, errRescue } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import type { TStore } from './store'
import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:ArticleDigest')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71()

let store: TStore | undefined
let sub$ = null

export const inAnchor = (): void => {
  if (store) store.mark({ inViewport: true })
}

export const outAnchor = (): void => {
  if (store) store.mark({ inViewport: false })
}

export const worksTabOnChange = (tab: TWorksTab): void => {
  store.mark({ tab })
}

export const onBlogTabChange = (tab: string): void => {
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

export const onListReactionUsers = (type, data): void =>
  send(EVENT.USER_LISTER_OPEN, {
    type,
    data: { ...data, thread: store.activeThread },
  })

export const subscribeCommunity = (): void => {
  const { viewingArticle } = store
  const communityId = viewingArticle.originalCommunity.id

  sr71$.mutate(S.subscribeCommunity, { communityId })
}

export const unsubscribeCommunity = (): void => {
  const { viewingArticle } = store
  const communityId = viewingArticle.originalCommunity.id
  sr71$.mutate(S.unsubscribeCommunity, { communityId })
}

export const loadCommunity = (): void => {
  const { viewingArticle, isLogin } = store
  if (!isLogin) return

  const { raw } = viewingArticle.originalCommunity
  sr71$.query(S.community, { raw })
}

export const handleWorksUpvote = (viewerHasUpvoted: boolean): void => {
  send(EVENT.WORKS_UPVOTE, { data: { viewerHasUpvoted } })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('community'),
    action: ({ community }) => {
      const { viewerHasSubscribed, subscribersCount } = community
      store.mark({ viewerHasSubscribed, subscribersCount })
    },
  },

  {
    match: asyncRes('blogRssInfo'),
    action: ({ blogRssInfo }) => store.mark({ blogRssInfo }),
  },
  {
    match: asyncRes('subscribeCommunity'),
    action: () => loadCommunity(),
  },
  {
    match: asyncRes('unsubscribeCommunity'),
    action: () => loadCommunity(),
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
      errRescue({ type: ERR.TIMEOUT, details, path: 'AccountEditor' }),
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => errRescue({ type: ERR.NETWORK, path: 'ArticleDigest' }),
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (
  _store: TStore,
  scrollDirection: TScrollDirection,
): void => {
  useEffect(() => {
    store = _store
    // log('effect init')
    if (!sub$) {
      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    }

    loadCommunity()
    store.mark({ scrollDirection })

    return () => {
      // log('effect uninit')
      store.reset()
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store, scrollDirection])
}
