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
  $solver,
  scrollIntoEle,
  GA,
} from '../../utils'

import S from './schema'
import SR71 from '../../utils/network/sr71'
// import sr71$ from '../../utils/network/sr71_simple'

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
const validFilter = R.pickBy(
  R.compose(
    R.not,
    R.isEmpty
  )
)

export const inAnchor = () => store.setHeaderFix(false)
export const outAnchor = () => store.setHeaderFix(true)

export function loadPosts(page = 1) {
  // NOTE: do not use viewing.community, it's too slow
  const { mainPath: community, subPath: topic } = store.curRoute
  const userHasLogin = store.isLogin

  store.markState({ curView: TYPE.LOADING })

  const args = {
    filter: {
      page,
      size: PAGE_SIZE.D,
      ...store.filtersData,
      tag: store.activeTagData.title,
      community,
    },
    userHasLogin,
  }

  if (community === ROUTE.HOME) {
    args.filter = R.merge(args.filter, { topic })
  }

  args.filter = validFilter(args.filter)
  scrollIntoEle(TYPE.APP_HEADER_ID)

  debug('loadPosts args: ', args)
  sr71$.query(S.pagedPosts, args)
  store.markRoute({ page })
}

export const onFilterSelect = option => store.selectFilter(option)

export function onTagSelect(tag) {
  store.selectTag(tag)
  loadPosts()
}

export function onTitleSelect(data) {
  // debug('onTitleSelect publish post: ', data)
  setTimeout(() => store.setViewedFlag(data.id), 1500)

  dispatchEvent(EVENT.PREVIEW_OPEN, {
    type: TYPE.PREVIEW_POST_VIEW,
    thread: THREAD.POST,
    data,
  })

  GA.event({
    action: data.title,
    category: '浏览',
    label: '社区',
  })
}

export const createContent = () =>
  dispatchEvent(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_POST_CREATE })

export const onCustomChange = option => {
  dispatchEvent(EVENT.SET_C11N, { data: option })

  debug('onCustomChange option: ', option)
  store.updateC11N(option)
}

// ###############################
// Data & Error handlers
// ###############################
const DataSolver = [
  {
    match: asyncRes('pagedPosts'),
    action: ({ pagedPosts }) => {
      let curView = TYPE.RESULT
      debug('load back pagedPosts: ', pagedPosts)
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
    action: () => loadPosts(),
  },
  {
    match: asyncRes(EVENT.TABBER_CHANGE),
    action: () => loadPosts(),
  },
  {
    match: asyncRes(EVENT.REFRESH_POSTS),
    action: () => loadPosts(),
  },
  {
    match: asyncRes(EVENT.PREVIEW_CLOSED),
    action: () => store.setViewing({ post: {} }),
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

const loadIfNeed = () => {
  /* if (R.isEmpty(store.pagedPostsData.entries)) { */
  // loadPosts()
  /* } */
}

export function init(_store) {
  if (store) {
    return loadIfNeed()
  }

  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  loadIfNeed()
}
