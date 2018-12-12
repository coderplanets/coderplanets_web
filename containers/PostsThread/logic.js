import R from 'ramda'
import { PAGE_SIZE } from '../../config'

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
} from '../../utils'

import S from './schema'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71({
  resv_event: [
    EVENT.REFRESH_POSTS,
    EVENT.PREVIEW_CLOSED,
    EVENT.COMMUNITY_CHANGE,
    EVENT.TABBER_CHANGE,
  ],
})
/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:PostsThread')
/* eslint-enable no-unused-vars */

let store = null
let sub$ = null

// TODO: move to utils
const validFilter = R.pickBy(R.compose(R.not, R.isEmpty))

export const inAnchor = () => store.setHeaderFix(false)
export const outAnchor = () => store.setHeaderFix(true)

export function loadPosts(page = 1) {
  // NOTE: do not use viewing.community, it's too slow
  const { curCommunity } = store
  const { subPath: topic } = store.curRoute
  // const { curCommunity: community, curThread } = store

  const userHasLogin = store.isLogin

  store.markState({ curView: TYPE.LOADING })

  const args = {
    filter: {
      page,
      size: PAGE_SIZE.D,
      ...store.filtersData,
      tag: store.activeTagData.title,
      community: curCommunity.raw,
    },
    userHasLogin,
  }

  if (curCommunity.raw === ROUTE.HOME) {
    args.filter = R.merge(args.filter, { topic })
  }

  args.filter = validFilter(args.filter)
  scrollIntoEle(TYPE.APP_HEADER_ID)

  sr71$.query(S.pagedPosts, args)
  store.markRoute({ page })
}

export const onFilterSelect = option => store.selectFilter(option)

export function onTagSelect(tag) {
  store.selectTag(tag)
  loadPosts()
  store.markRoute({ tag: tag.title })
}

export const onUserSelect = user =>
  dispatchEvent(EVENT.PREVIEW_OPEN, {
    type: TYPE.PREVIEW_USER_VIEW,
    data: user,
  })

export function onTitleSelect(data) {
  // debug('onTitleSelect publish post: ', data)
  setTimeout(() => store.setViewedFlag(data.id), 1500)

  dispatchEvent(EVENT.PREVIEW_OPEN, {
    type: TYPE.PREVIEW_POST_VIEW,
    thread: THREAD.POST,
    data,
  })

  store.markRoute({ preview: THREAD.POST, id: data.id })
  /*
  GA.event({
    action: data.title,
    category: '浏览',
    label: '社区',
  })
  */
}

export const createContent = () => {
  if (!store.isLogin) return store.authWarning()

  dispatchEvent(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_POST_CREATE })
}

export const onCustomChange = option => {
  dispatchEvent(EVENT.SET_C11N, { data: option })
  store.updateC11N(option)
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
    match: asyncRes(EVENT.COMMUNITY_CHANGE),
    action: () => {
      debug('======= fucking COMMUNITY_CHANGE ')
      loadPosts()
    },
  },
  {
    match: asyncRes(EVENT.TABBER_CHANGE),
    action: res => {
      const { data } = res[EVENT.TABBER_CHANGE]
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
      store.markRoute({})
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
    },
  },
]

export function init(_store) {
  debug('======== init')

  store = _store
  if (sub$) return false // sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}

export function uninit() {
  if (store.curView !== TYPE.LOADING) {
    debug('===== do uninit')
    sub$.unsubscribe()
    sub$ = null
  }
}
