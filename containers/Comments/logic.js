import R from 'ramda'
import {
  gqRes,
  gqErr,
  makeDebugger,
  EVENT,
  ERR,
  $solver,
  scrollIntoEle,
  countWords,
  dispatchEvent,
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

export function createComment() {
  debug('createComment', comments.editContent)
  debug('activeArticle: ', comments.activeArticle)

  // TODO: validation...
  comments.markState({
    creating: true,
  })

  sr71$.mutate(S.createComment, {
    id: comments.activeArticle.id,
    body: comments.editContent,
  })
}

export function openCommentEditor() {
  comments.markState({
    showInputEditor: true,
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

const markLoading = fresh => {
  if (fresh) {
    return comments.markState({ loadingFresh: true })
  }
  return comments.markState({ loading: true })
}

const cancelLoading = () => {
  comments.markState({ loading: false, loadingFresh: false, creating: false })
}

// TODO: 第一次加载应该为综合排序(正序、点赞最多),创建评论以后应该使用倒序
export const loadComents = (page = 1, fresh = false) => {
  const args = {
    id: comments.activeArticle.id,
    filter: { page, size: PAGE_SIZE.COMMENTS },
  }

  markLoading(fresh)
  sr71$.query(S.comments, args)
}

function extractMentions(text) {
  const mentionsRegex = new RegExp('@([a-zA-Z0-9_.]+)', 'gim')

  let matches = text.match(mentionsRegex)
  if (matches && matches.length) {
    matches = matches.map(match => {
      return match.slice(1)
    })
    return R.uniq(matches)
  }
  return []
}

export function onCommentInputChange(editContent) {
  // debug('onCommentInputChange: ', editContent)

  // debug('countWords --> ', extractMentions(editContent))

  comments.markState({
    countCurrent: countWords(editContent),
    extractMentions: extractMentions(editContent),
    editContent,
  })
}
export function insertCode() {
  dispatchEvent(EVENT.DRAFT_INSERT_SNIPPET, {
    type: 'FUCK',
    data: '```javascript\n\n```',
  })
}

export function onMention(user) {
  debug('onMention: ', user)
  comments.addReferUser(user)
}

const DataSolver = [
  {
    match: gqRes(EVENT.PREVIEW),
    action: () => {},
  },
  {
    match: gqRes('comments'),
    action: ({ comments }) => {
      cancelLoading()
      commentsConflict.markState({
        ...comments,
      })
    },
  },

  {
    match: gqRes('createComment'),
    action: ({ createComment }) => {
      debug('createComment', createComment)
      commentsConflict.markState({
        showInputEditor: false,
        editContent: '',
      })
      loadComents(1, true)
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
