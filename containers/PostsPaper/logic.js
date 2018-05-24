import R from 'ramda'
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

import { PAGE_SIZE } from '../../config'
import S from './schema'
import SR71 from '../../utils/network/sr71'
// import sr71$ from '../../utils/network/sr71_simple'

const sr71$ = new SR71({
  resv_event: [EVENT.REFRESH_POSTS, EVENT.PREVIEW_CLOSED],
})
/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:PostsPaper')
/* eslint-enable no-unused-vars */

let postsPaper = null
let sub$ = null

const validFilter = R.pickBy(R.compose(R.not, R.isEmpty))

export function inAnchor() {
  postsPaper.setHeaderFix(false)
}

export function outAnchor() {
  postsPaper.setHeaderFix(true)
}

export function loadPosts(page = 1) {
  postsPaper.markState({
    curView: TYPE.LOADING,
  })

  // debug('loadPosts curFilter: ', postsPaper.curFilter)
  // debug('loadPosts curTag: ', postsPaper.curTag)
  const args = {
    /* first: 4, */
    filter: {
      page,
      size: PAGE_SIZE.POSTSPAPER_POSTS,
      ...postsPaper.curFilter,
      tag: postsPaper.curTag.title,
    },
  }

  args.filter = validFilter(args.filter)
  scrollIntoEle(TYPE.APP_HEADER_ID)
  sr71$.query(S.pagedPosts, args)
}

export function onFilterSelect(key, val) {
  postsPaper.selectFilter(key, val)
  loadPosts()
}

export function onTagSelect(obj) {
  postsPaper.selectTag(obj)
  loadPosts()
}

export function onTitleSelect(activePost) {
  postsPaper.markState({ activePost })
  /* postsPaper.setActive(post) */
  /* debug('onTitleSelect publish post: ', activePost) */
  // PubSub.publish('hello', post)
  // dispatchEvent(EVENT.PREVIEW, { type: TYPE.POST_PREVIEW_VIEW, data: post })
  dispatchEvent(EVENT.NAV_EDIT, {
    type: TYPE.POST_PREVIEW_VIEW,
    data: activePost,
  })
  debug('activePost: ', activePost)

  GA.event({
    action: activePost.title,
    category: '浏览',
    label: '社区',
  })
}

export function createContent() {
  debug('onTitleSelect createContent ')
  dispatchEvent(EVENT.NAV_CREATE_POST, { type: TYPE.PREVIEW_CREATE_POST })
}

export function pageChange(page) {
  loadPosts(page)
}

const DataSolver = [
  {
    match: asyncRes('pagedPosts'),
    action: ({ pagedPosts }) => {
      postsPaper.loadData(pagedPosts)
      if (pagedPosts.entries.length === 0) {
        return postsPaper.markState({
          curView: TYPE.NOT_FOUND,
        })
      }
      return postsPaper.markState({
        curView: TYPE.RESULT,
      })
    },
  },
  {
    match: asyncRes(EVENT.REFRESH_POSTS),
    action: res => {
      debug('EVENT.REFRESH_POSTS: ', res)
      loadPosts()
    },
  },
  {
    match: asyncRes(EVENT.PREVIEW_CLOSED),
    action: () => postsPaper.markState({ activePost: {} }),
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

export function init(selectedStore) {
  postsPaper = selectedStore
  debug('@@@ init @@@ --')
  if (sub$) sub$.unsubscribe()
  /* sub$ = sr71$.data().subscribe(handleData) */
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  loadPosts()
}
