import { pickBy } from 'ramda'
import { useEffect } from 'react'

import type { TTag, TThread } from '@/spec'
import { TYPE, EVENT, ERR, THREAD } from '@/constant'

import {
  asyncSuit,
  buildLog,
  send,
  notEmpty,
  errRescue,
  scrollToTabber,
  thread2Subpath,
} from '@/utils'

import type { TStore } from './store'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:PostsThread')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  // @ts-ignore
  receive: [
    EVENT.REFRESH_POSTS,
    EVENT.DRAWER.AFTER_CLOSE,
    EVENT.COMMUNITY_CHANGE,
    EVENT.THREAD_CHANGE,
    EVENT.C11N_DENSITY_CHANGE,
  ],
})

let store: TStore | undefined
let sub$ = null

export const inAnchor = (): void => {
  if (store) store.showTopModeline(false)
}

export const outAnchor = (): void => {
  if (store) store.showTopModeline(true)
}

export const tabOnChange = (activeThread: TThread): void => {
  const subPath = thread2Subpath(activeThread)
  // log('EVENT.activeThread -----> ', activeThread)
  // log('EVENT.subPath -----> ', subPath)

  store.markRoute({ subPath })
  store.setViewing({ activeThread })

  send(EVENT.THREAD_CHANGE, { data: { activeThread } })
}

export const loadPosts = (page = 1): void => {
  const { curCommunity } = store

  const userHasLogin = store.isLogin

  const args = {
    filter: {
      page,
      size: store.pageDensity,
      ...store.filtersData,
      tag: store.activeTagData.title,
      community: curCommunity.raw,
    },
    userHasLogin,
  }

  args.filter = pickBy(notEmpty, args.filter)

  store.mark({ curView: TYPE.LOADING })
  sr71$.query(S.pagedPosts, args)
  store.markRoute({ page, ...store.filtersData })
}

export const onPageChange = (page = 1): void => {
  scrollToTabber()
  loadPosts(page)
}

export const onFilterSelect = (option): void => {
  store.selectFilter(option)
  log('cur filter: ', store.filtersData)
  store.markRoute({ ...store.filtersData })
  loadPosts()
}

export const onTagSelect = (tag: TTag): void => {
  store.selectTag(tag)
  loadPosts()
  store.markRoute({ tag: tag.title })
}

export const onUserSelect = (): void => {
  //
}

/**
 * preview the current article
 *
 * @param {*} data {id: string, title: string}
 */
export const onPreview = (data): void => {
  setTimeout(() => store.setViewedFlag(data.id), 1500)
  const type = TYPE.DRAWER.POST_VIEW
  const thread = THREAD.POST

  send(EVENT.DRAWER.OPEN, { type, thread, data })
  store.markRoute(data.id)
}

export const onContentCreate = (): void => {
  if (!store.isLogin) return store.authWarning()

  send(EVENT.DRAWER.OPEN, { type: TYPE.DRAWER.POST_CREATE })
}

// TODO: move to rootStore
export const onAdsClose = (): void => {
  log('onAdsClose')
  if (store.isMemberOf('seniorMember') || store.isMemberOf('sponsorMember')) {
    return log('do custom ads')
  }
}

// toggle FAQ active state
export const onFaqChange = (): void => {
  const { faqActive } = store
  store.mark({ faqActive: !faqActive })
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
    match: asyncRes('partialTags'),
    action: ({ partialTags: tags }) => store.mark({ tags }),
  },
  {
    match: asyncRes('pagedCommunities'),
    action: ({ pagedCommunities }) =>
      store.mark({ pagedCityCommunities: pagedCommunities }),
  },
  {
    match: asyncRes(EVENT.COMMUNITY_CHANGE),
    action: () => {
      store.mark({ activeTag: null })
      loadPosts()
    },
  },
  {
    match: asyncRes(EVENT.THREAD_CHANGE),
    action: (res) => {
      const { data } = res[EVENT.THREAD_CHANGE]

      store.mark({ activeTag: null })
      loadPosts()
    },
  },
  {
    match: asyncRes(EVENT.REFRESH_POSTS),
    action: () => loadPosts(),
  },
  {
    match: asyncRes(EVENT.C11N_DENSITY_CHANGE),
    action: (res) => {
      const { type } = res[EVENT.C11N_DENSITY_CHANGE]
      if (type === THREAD.POST) loadPosts(store.pagedPosts.pageNumber)
    },
  },
  {
    match: asyncRes(EVENT.DRAWER.AFTER_CLOSE),
    action: () => {
      store.setViewing({ post: {} })
      store.markRoute({ ...store.filtersData, ...store.tagQuery })
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
