import { useEffect } from 'react'
import { merge } from 'ramda'

import { EVENT, ERR } from '@/constant'
import { buildLog } from '@/utils/logger'
import { errRescue } from '@/utils/helper'
import asyncSuit from '@/utils/async'

import S from './schema'
import type { TStore } from './store'

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  // @ts-ignore
  receive: [EVENT.DRAWER.CLOSE],
})

let store: TStore | undefined
let sub$ = null

/* eslint-disable-next-line */
const log = buildLog('L:ArticleViewer')

export const holder = 1

const loadArticle = (): void => {
  console.log('## loadArticle ...')
  const userHasLogin = store.isLogin
  const { id, meta } = store.viewingArticle

  const variables = { id, userHasLogin }
  console.log('# articleViewer: ', store.viewingArticle)
  markLoading()
  const schema = S[meta.thread.toLowerCase()]
  console.log('schame: ', schema)
  return sr71$.query(schema, variables)
}

const markLoading = (maybe = true) => store.mark({ loading: maybe })

// ###############################
// init & uninit handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('post'),
    action: ({ post }) => {
      console.log('got post:', post)
      store.setViewing({ post: merge(store.viewingArticle, post) })
      store.syncViewingItem(post)
      markLoading(false)
    },
  },
  {
    match: asyncRes('works'),
    action: ({ works }) => {
      console.log('got works:', works)
      store.setViewing({ works: merge(store.viewingArticle, works) })
      store.syncViewingItem(works)
      markLoading(false)
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
