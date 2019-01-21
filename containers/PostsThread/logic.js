import R from 'ramda'

import {
  asyncRes,
  asyncErr,
  makeDebugger,
  dispatchEvent,
  EVENT,
  ERR,
  TYPE,
  ROUTE,
  THREAD,
  COMMUNITY_SPEC_THREADS,
  $solver,
  scrollIntoEle,
  notEmpty,
  thread2Subpath,
  errRescue,
} from 'utils'

import SR71 from 'utils/network/sr71'
import S from './schema'

const sr71$ = new SR71({
  resv_event: [
    EVENT.REFRESH_POSTS,
    EVENT.PREVIEW_CLOSED,
    EVENT.COMMUNITY_CHANGE,
    EVENT.TABBER_CHANGE,
  ],
})

let store = null
let sub$ = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:PostsThread')

export const inAnchor = () => store.setHeaderFix(false)
export const outAnchor = () => store.setHeaderFix(true)

export const loadPosts = (page = 1) => {
  const { curCommunity } = store
  const { subPath: topic } = store.curRoute

  // display same-city list instead
  // TODO: load same-city communities
  if (curCommunity.raw === ROUTE.HOME && topic === THREAD.CITY) return false

  const userHasLogin = store.isLogin

  store.markState({ curView: TYPE.LOADING })

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
  scrollIntoEle(TYPE.APP_HEADER_ID)

  debug('args: ', args)
  sr71$.query(S.pagedPosts, args)
  store.markRoute({ page, ...store.filtersData })
}

export const onFilterSelect = option => {
  store.selectFilter(option)
  debug('cur filter: ', store.filtersData)
  store.markRoute({ ...store.filtersData })
  loadPosts()
}

export const onTagSelect = tag => {
  store.selectTag(tag)
  loadPosts()
  store.markRoute({ tag: tag.title })
}

export const onUserSelect = user =>
  dispatchEvent(EVENT.PREVIEW_OPEN, {
    type: TYPE.PREVIEW_USER_VIEW,
    data: user,
  })

export const onPreview = data => {
  // debug('onPreview publish post: ', data)
  setTimeout(() => store.setViewedFlag(data.id), 1500)

  dispatchEvent(EVENT.PREVIEW_OPEN, {
    type: TYPE.PREVIEW_POST_VIEW,
    thread: THREAD.POST,
    data,
  })

  store.markRoute({
    preview: THREAD.POST,
    id: data.id,
    community: store.curCommunity.raw,
    ...store.tagQuery,
    ...store.filtersData,
  })
}

export const onContentCreate = () => {
  if (!store.isLogin) return store.authWarning()

  dispatchEvent(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_POST_CREATE })
}

export const onC11NChange = option => {
  dispatchEvent(EVENT.SET_C11N, { data: option })
  store.updateC11N(option)

  if (R.has('displayDensity', option)) {
    loadPosts(store.pagedPosts.pageNumber)
  }
}

export const onAdsClose = () => {
  debug('onAdsClose')
  if (store.isMemberOf('seniorMember') || store.isMemberOf('sponsorMember')) {
    return debug('do custom ads')
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

  dispatchEvent(EVENT.COMMUNITY_CHANGE)
}

// ###############################
// Data & Error handlers
// ###############################
const DataSolver = [
  {
    match: asyncRes('pagedPosts'),
    action: ({ pagedPosts }) => {
      debug('pagedPosts: ', pagedPosts)
      let curView = TYPE.RESULT
      if (pagedPosts.totalCount === 0) {
        curView = TYPE.RESULT_EMPTY
      }
      store.markState({ curView, pagedPosts })
    },
  },
  {
    match: asyncRes('partialTags'),
    action: ({ partialTags: tags }) => store.markState({ tags }),
  },
  {
    match: asyncRes('pagedCommunities'),
    action: ({ pagedCommunities }) =>
      store.markState({ pagedCityCommunities: pagedCommunities }),
  },
  {
    match: asyncRes(EVENT.COMMUNITY_CHANGE),
    action: () => loadPosts(),
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
        loadPosts()
      }
    },
  },
  {
    match: asyncRes(EVENT.REFRESH_POSTS),
    action: () => loadPosts(),
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

export const init = _store => {
  store = _store
  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  /*
     NOTE: city communities list is not supported by SSR
     need load manully
   */
  loadCityCommunities()
}

export const uninit = () => {
  if (store.curView === TYPE.LOADING || !sub$) return false
  debug('===== do uninit')
  sr71$.stop()
  sub$.unsubscribe()
  sub$ = null
}
