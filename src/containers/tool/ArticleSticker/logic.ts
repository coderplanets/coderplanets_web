import { useEffect } from 'react'
// import { } from 'ramda'

import { EVENT } from '@/constant'

import { authWarn, addCollection } from '@/utils/helper'
import { buildLog } from '@/utils/logger'
import asyncSuit from '@/utils/async'
import { matchArticleUpvotes } from '@/utils/macros'

import S from './schema'
import type { TStore } from './store'

const { SR71, $solver, asyncRes } = asyncSuit
const sr71$ = new SR71({
  // @ts-ignore
  receive: [EVENT.WORKS_UPVOTE],
})

let sub$ = null
let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:ArticleSticker')

export const handleUpvote = (viewerHasUpvoted: boolean): void => {
  if (!store.isLogin) return authWarn({ hideToast: true })

  store.updateUpvote(viewerHasUpvoted)
  const { id, meta } = store.viewingArticle

  viewerHasUpvoted
    ? sr71$.mutate(S.getUpvoteSchema(meta.thread), { id })
    : sr71$.mutate(S.getUndoUpvoteSchema(meta.thread), { id })
}

export const handleCollect = (): void => {
  if (!store.isLogin) return authWarn({ hideToast: true })
  addCollection()
}

// export const loadPagedCommentsParticipants = (): void => {
//   const { viewingArticle: article } = store

//   const args = {
//     id: article.id,
//     thread: article.meta.thread,
//     filter: { page: 1, size: 20 },
//   }
//   log('load comments query args: ', args)
//   sr71$.query(S.pagedCommentsParticipants, args)
// }

// update the real upvoteCount after upvote action
const handleUovoteRes = ({ upvotesCount }) => {
  store.updateUpvoteCount(upvotesCount)
}

const DataSolver = [
  ...matchArticleUpvotes(handleUovoteRes),
  {
    match: asyncRes('pagedCommentsParticipants'),
    action: ({ pagedCommentsParticipants }) => {
      store.mark({ pagedCommentsParticipants })
    },
  },
  {
    match: asyncRes(EVENT.WORKS_UPVOTE),
    action: (data) => {
      const { viewerHasUpvoted } = data[EVENT.WORKS_UPVOTE].data
      handleUpvote(viewerHasUpvoted)
    },
  },
]
const ErrSolver = []

// ###############################
// init & uninit handlers
// ###############################

export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    log('useInit: ', store)
    // return () => store.reset()
    return () => {
      sr71$.stop()
      sub$.unsubscribe()
      sub$ = null
    }
  }, [_store])
}
