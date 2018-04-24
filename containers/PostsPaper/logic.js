import R from 'ramda'
import {
  gqRes,
  makeDebugger,
  dispatchEvent,
  EVENT,
  ERR,
  TYPE,
  $solver,
} from '../../utils'
import S from './schema'
import SR71 from '../../utils/network/sr71'
// import sr71$ from '../../utils/network/sr71_simple'

const sr71$ = new SR71({
  resv_event: [EVENT.REFRESH_POSTS],
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

export function pageChange(page) {
  debug('pageChange page: ', page)
  loadPosts(page)
}

export function loadPosts(page = 1) {
  postsPaper.markState({
    curView: 'LOADING',
  })

  // debug('loadPosts curFilter: ', postsPaper.curFilter)
  // debug('loadPosts curTag: ', postsPaper.curTag)
  const args = {
    /* first: 4, */
    filter: {
      page,
      size: 20,
      ...postsPaper.curFilter,
      tag: postsPaper.curTag.title,
    },
  }

  args.filter = validFilter(args.filter)
  debug('args: ', args)
  sr71$.query(S.pagedPosts, args)
}

export function filterOnSelect(key, val) {
  postsPaper.selectFilter(key, val)
  loadPosts()
}

export function tagOnSelect(obj) {
  postsPaper.selectTag(obj)
  loadPosts()
}

export function onContentSelect(post) {
  debug('onContentSelect publish ')
  // PubSub.publish('hello', post)
  // dispatchEvent(EVENT.PREVIEW, { type: TYPE.POST_PREVIEW_VIEW, data: post })
  dispatchEvent(EVENT.NAV_EDIT, { type: TYPE.POST_PREVIEW_VIEW, data: post })
}

export function createContent() {
  debug('onContentSelect createContent ')
  dispatchEvent(EVENT.NAV_CREATE_POST, { type: TYPE.PREVIEW_CREATE_POST })
}

const DataSolver = [
  {
    match: gqRes('pagedPosts'),
    action: ({ pagedPosts }) => {
      postsPaper.loadData(pagedPosts)
      postsPaper.markState({
        curView: 'RESULT',
      })
    },
  },
  {
    match: gqRes(EVENT.REFRESH_POSTS),
    action: res => {
      debug('EVENT.REFRESH_POSTS: ', res)
      loadPosts()
    },
  },
]

const ErrSolver = [
  {
    match: R.pathEq(['error'], ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL', details)
    },
  },
  {
    match: R.pathEq(['error'], ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT', details)
    },
  },
  {
    match: R.pathEq(['error'], ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK', details)
    },
  },
  {
    match: R.pathEq(['error'], ERR.NOT_FOUND),
    action: ({ details }) => {
      debug('ERR..NOT_FOUND', details)
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
