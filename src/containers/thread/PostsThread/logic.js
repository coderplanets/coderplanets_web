import R from 'ramda'
import { useEffect } from 'react'

import {
  TYPE,
  EVENT,
  ERR,
  THREAD,
  ROUTE,
  COMMUNITY_SPEC_THREADS,
} from '@constant'

import {
  asyncSuit,
  buildLog,
  send,
  notEmpty,
  thread2Subpath,
  errRescue,
  scrollToTabber,
} from '@utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:PostsThread')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  recieve: [
    EVENT.REFRESH_POSTS,
    EVENT.PREVIEW_CLOSED,
    EVENT.COMMUNITY_CHANGE,
    EVENT.TABBER_CHANGE,
    EVENT.C11N_DENSITY_CHANGE,
  ],
})

let store = null
let sub$ = null

export const inAnchor = () => {
  if (store) store.setHeaderFix(false)
}

export const outAnchor = () => {
  if (store) store.setHeaderFix(true)
}

export const loadPosts = (page = 1) => {
  const { curCommunity } = store
  const { subPath: topic } = store.curRoute

  // display same-city list instead
  if (curCommunity.raw === ROUTE.HOME && topic === THREAD.CITY) return false

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

  if (curCommunity.raw === ROUTE.HOME) {
    args.filter = R.merge(args.filter, { topic })
  }
  args.filter = R.pickBy(notEmpty, args.filter)

  store.mark({ curView: TYPE.LOADING })
  sr71$.query(S.pagedPosts, args)
  store.markRoute({ page, ...store.filtersData })
}

export const onPageChange = page => {
  scrollToTabber()
  loadPosts(page)
}

export const onFilterSelect = option => {
  store.selectFilter(option)
  log('cur filter: ', store.filtersData)
  store.markRoute({ ...store.filtersData })
  loadPosts()
}

export const onTagSelect = tag => {
  store.selectTag(tag)
  loadPosts()
  store.markRoute({ tag: tag.title })
}

export const onUserSelect = user =>
  send(EVENT.PREVIEW_OPEN, {
    type: TYPE.PREVIEW_USER_VIEW,
    data: user,
  })

/**
 * preview the current article
 *
 * @param {*} data {id: string, title: string}
 */
export const onPreview = data => {
  setTimeout(() => store.setViewedFlag(data.id), 1500)
  const type = TYPE.PREVIEW_POST_VIEW
  const thread = THREAD.POST

  send(EVENT.PREVIEW_OPEN, { type, thread, data })
  store.markRoute(data.id)
}

export const onContentCreate = () => {
  if (!store.isLogin) return store.authWarning()

  send(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_POST_CREATE })
}

export const onAdsClose = () => {
  log('onAdsClose')
  if (store.isMemberOf('seniorMember') || store.isMemberOf('sponsorMember')) {
    return log('do custom ads')
  }

  store.upgradeHepler()
}

const loadCityCommunities = () => {
  const { curCommunity, curRoute } = store
  if (curCommunity.raw === ROUTE.HOME && curRoute.subPath === THREAD.CITY) {
    const args = { filter: { page: 1, size: 30, category: 'city' } }

    sr71$.query(S.pagedCommunities, args)
  }
}

export const onCommunitySelect = community => {
  store.setViewing({ community, activeThread: THREAD.POST, post: {} })

  store.markRoute({
    mainPath: community.raw,
    subPath: thread2Subpath(THREAD.POST),
  })

  send(EVENT.COMMUNITY_CHANGE)
}

// toggle FAQ active state
export const onFaqChange = () => {
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
    match: asyncRes(EVENT.TABBER_CHANGE),
    action: res => {
      const { data } = res[EVENT.TABBER_CHANGE]

      if (R.contains(data.activeThread, [THREAD.GROUP, THREAD.COMPANY]))
        return false

      const { curCommunity, curRoute } = store
      if (curCommunity.raw === ROUTE.HOME && curRoute.subPath === THREAD.CITY) {
        return loadCityCommunities()
      }

      if (!R.contains(data.activeThread, R.values(COMMUNITY_SPEC_THREADS))) {
        store.mark({ activeTag: null })
        loadPosts()
      }
    },
  },
  {
    match: asyncRes(EVENT.REFRESH_POSTS),
    action: () => loadPosts(),
  },
  {
    match: asyncRes(EVENT.C11N_DENSITY_CHANGE),
    action: res => {
      const { type } = res[EVENT.C11N_DENSITY_CHANGE]
      if (type === THREAD.POST) loadPosts(store.pagedPosts.pageNumber)
    },
  },
  {
    match: asyncRes(EVENT.PREVIEW_CLOSED),
    action: () => {
      store.setViewing({ post: {} })
      store.markRoute({ ...store.filtersData, ...store.tagQuery })
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {},
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
export const useInit = _store =>
  useEffect(() => {
    store = _store
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    /*
         NOTE: city communities list is not supported by SSR
         need load manully
       */
    loadCityCommunities()

    return () => {
      if (store.curView === TYPE.LOADING || !sub$) return false
      // log('===== do uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
