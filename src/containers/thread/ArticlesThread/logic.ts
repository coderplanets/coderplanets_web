import { useEffect } from 'react'

import type { TArticle, TThread, TArticleFilter } from '@/spec'
import { TYPE, EVENT, ERR, THREAD } from '@/constant'

import {
  asyncSuit,
  buildLog,
  send,
  errRescue,
  scrollToTabber,
  thread2Subpath,
} from '@/utils'

import type { TStore } from './store'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:ArticlesThread')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  // @ts-ignore
  receive: [
    EVENT.REFRESH_POSTS,
    EVENT.COMMUNITY_CHANGE,
    EVENT.THREAD_CHANGE,
    EVENT.C11N_DENSITY_CHANGE,
  ],
})

let store: TStore | undefined
let sub$ = null

export const inAnchor = (): void => store?.showTopModeline(false)
export const outAnchor = (): void => store?.showTopModeline(true)

// TODO: 是否有必要存在 ？
export const tabOnChange = (activeThread: TThread): void => {
  const subPath = thread2Subpath(activeThread)
  // log('EVENT.activeThread -----> ', activeThread)
  // log('EVENT.subPath -----> ', subPath)

  store.markRoute({ subPath })
  store.setViewing({ activeThread })

  send(EVENT.THREAD_CHANGE, { data: { activeThread } })
}

export const loadArticles = (page = 1): void => {
  const { curThread } = store

  store.mark({ curView: TYPE.LOADING })
  const args = store.getLoadArgs(page)

  switch (curThread) {
    case THREAD.JOB: {
      console.log('TODO: ')
      break
    }
    default: {
      sr71$.query(S.pagedPosts, args)
      break
    }
  }

  store.markRoute({ page, ...store.filtersData })
  scrollToTabber()
}

// export const loadPosts = (page = 1): void => {
//   const args = store.getLoadArgs(page)

//   store.mark({ curView: TYPE.LOADING })
//   sr71$.query(S.pagedPosts, args)
//   store.markRoute({ page, ...store.filtersData })

//   scrollToTabber()
// }

export const onFilterSelect = (option: TArticleFilter): void => {
  store.selectFilter(option)
  log('cur filter: ', store.filtersData)
  store.markRoute({ ...store.filtersData })
  loadArticles()
}

/**
 * preview the current article
 */
export const onPreview = (data: TArticle): void => {
  setTimeout(() => store.setViewedFlag(data.id), 1500)
  const type = TYPE.DRAWER.POST_VIEW
  const thread = THREAD.POST

  send(EVENT.DRAWER.OPEN, { type, thread, data })
}

export const onContentCreate = (): void => {
  if (!store.isLogin) return store.authWarning()

  send(EVENT.DRAWER.OPEN, { type: TYPE.DRAWER.POST_CREATE })
}

// ###############################
// Data & Error handlers
// ###############################
const DataSolver = [
  {
    match: asyncRes('pagedPosts'),
    action: ({ pagedPosts }) => {
      log('pagedPosts: ', pagedPosts)
      let curView = TYPE.RESULT
      if (pagedPosts.totalCount === 0) {
        curView = TYPE.RESULT_EMPTY
      }
      store.mark({ curView, pagedPosts })
    },
  },
  {
    match: asyncRes(EVENT.COMMUNITY_CHANGE),
    action: () => loadArticles(),
  },
  // {
  //   match: asyncRes(EVENT.THREAD_CHANGE),
  //   action: (res) => {
  //     const { data } = res[EVENT.THREAD_CHANGE]
  //     loadArticles()
  //   },
  // },
  {
    match: asyncRes(EVENT.REFRESH_POSTS),
    action: () => loadArticles(),
  },
  {
    match: asyncRes(EVENT.C11N_DENSITY_CHANGE),
    action: (res) => {
      const { type } = res[EVENT.C11N_DENSITY_CHANGE]
      if (type === THREAD.POST) loadArticles(store.pagedPosts.pageNumber)
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
      if (store.curView === TYPE.LOADING || !sub$) return
      // log('===== do uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
