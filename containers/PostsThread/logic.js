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
  debug('loadPosts')
  // NOTE: do not use viewing.community, it's too slow
  const { mainPath } = store.curRoute
  const community = mainPath
  store.markState({ curView: TYPE.LOADING })

  debug('store.activeTagData', store.activeTagData)
  const args = {
    filter: {
      page,
      size: PAGE_SIZE.COMMON,
      ...store.filtersData,
      tag: store.activeTagData.title,
      community,
    },
  }

  args.filter = validFilter(args.filter)
  scrollIntoEle(TYPE.APP_HEADER_ID)

  sr71$.query(S.pagedPosts, args)
  store.markRoute({ page })
}

export function onFilterSelect(option) {
  store.selectFilter(option)
  loadPosts()
}

export function onTagSelect(tag) {
  store.selectTag(tag)
  loadPosts()
}

export function onTitleSelect(post) {
  store.setViewing({ post })
  /* store.setActive(post) */
  debug('onTitleSelect publish post: ', post)
  dispatchEvent(EVENT.PREVIEW_OPEN, {
    type: TYPE.PREVIEW_POST_VIEW,
    data: post,
  })

  GA.event({
    action: post.title,
    category: '浏览',
    label: '社区',
  })
}

export function createContent() {
  debug('onTitleSelect createContent ')
  dispatchEvent(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_POST_CREATE })
}

const DataSolver = [
  {
    match: asyncRes('pagedPosts'),
    action: ({ pagedPosts }) => {
      let curView = TYPE.RESULT
      if (pagedPosts.totalCount === 0) {
        curView = TYPE.RESULT_EMPTY
      }
      store.markState({ curView, pagedPosts })
    },
  },
  {
    match: asyncRes('partialTags'),
    action: ({ partialTags }) => {
      store.markState({
        tags: partialTags,
      })
    },
  },
  {
    match: asyncRes(EVENT.COMMUNITY_CHANGE),
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
  if (!store.pagedPosts) {
    loadPosts()
  }
}

export function init(_store) {
  if (store) return false
  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  loadIfNeed()
}
