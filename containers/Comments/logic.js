// import R from 'ramda'
import {
  gqRes,
  gqErr,
  makeDebugger,
  EVENT,
  ERR,
  $solver,
  scrollIntoEle,
} from '../../utils'

import { PAGE_SIZE } from '../../config'
import SR71 from '../../utils/network/sr71'
import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Comments')
/* eslint-enable no-unused-vars */

let comments = null
let commentsConflict = null

export function onCommentInput() {
  // debug('onCommentInput')
  comments.markState({
    showInputEditor: !comments.showInputEditor,
  })
}

export function onCommentInputBlur() {
  comments.markState({
    showInputEditor: false,
  })
}

export function pageChange(page = 1) {
  scrollIntoEle('lists-info')
  loadComents(page)
}

export const loadComents = (page = 1) => {
  const args = {
    id: comments.activeArticle.id,
    filter: { page, size: PAGE_SIZE.COMMENTS },
  }

  comments.markState({ loading: true })

  console.log('---.> query: ', args)
  sr71$.query(S.comments, args)
}

export function onCommentInputChange(value) {
  debug('onCommentInputChange: ', value)
}

const DataSolver = [
  {
    match: gqRes(EVENT.PREVIEW),
    action: () => {},
  },
  {
    match: gqRes('comments'),
    action: ({ comments }) => {
      debug('--- bbb -> load comments: ', comments)
      commentsConflict.markState({
        ...comments,
        loading: false,
      })
    },
  },
]

const ErrSolver = [
  {
    match: gqErr(ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
    },
  },
  {
    match: gqErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
    },
  },
  {
    match: gqErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
    },
  },
]

export function init(selectedStore) {
  comments = selectedStore
  commentsConflict = comments

  if (sub$) sub$.unsubscribe()

  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  loadComents()
}
