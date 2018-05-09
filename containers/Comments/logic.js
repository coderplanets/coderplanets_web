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
  extractMentions,
  stripMobx,
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

// TODO: 第一次加载应该为综合排序(正序、点赞最多),创建评论以后应该使用倒序
const defaultArgs = {
  fresh: false,
  filter: { page: 1, size: PAGE_SIZE.COMMENTS, sort: 'ASC_INSERTED' },
  /* "DESC_INSERTED" */
}

export const loadComents = (args = {}) => {
  // debug('loadComents passed in: ', args)
  args = R.mergeDeepRight(defaultArgs, args)
  args.id = comments.activeArticle.id
  // debug('loadComents args: ', args)
  markLoading(args.fresh)
  sr71$.query(S.comments, args)
}

const markLoading = fresh => {
  if (fresh) {
    return comments.markState({ loadingFresh: true })
  }
  return comments.markState({ loading: true })
}

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

export function createReplyComment() {
  sr71$.mutate(S.replyComment, {
    id: comments.replyToComment.id,
    body: comments.replyContent,
  })
}

export function deleteComment() {
  sr71$.mutate(S.deleteComment, {
    id: comments.tobeDeleteId,
  })
}

// show delete confirm
export function onDelete(comment) {
  comments.markState({
    tobeDeleteId: comment.id,
  })
}

export function cancleDelete() {
  comments.markState({
    tobeDeleteId: null,
  })
}

export function previewReply(data) {
  debug('previewReply --> : ', data)
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
  loadComents({ filter: { page } })
}

const cancelLoading = () => {
  comments.markState({ loading: false, loadingFresh: false, creating: false })
}

export function onCommentInputChange(editContent) {
  comments.markState({
    countCurrent: countWords(editContent),
    extractMentions: extractMentions(editContent),
    editContent,
  })
}
export function onReplyInputChange(replyContent) {
  comments.markState({
    countCurrent: countWords(replyContent),
    extractMentions: extractMentions(replyContent),
    replyContent,
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

export function openReplyEditor(data) {
  comments.markState({
    showReplyEditor: true,
    replyToComment: stripMobx(data),
  })
}

export function closeReplyBox() {
  comments.markState({
    showReplyEditor: false,
  })
}

// ###############################
// Data & Error handlers
// ###############################
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
      loadComents({ filter: { page: 1, sort: 'DESC_INSERTED' }, fresh: true })
    },
  },
  {
    match: gqRes('replyComment'),
    action: ({ replyComment }) => {
      debug('replyComment', replyComment)
      commentsConflict.markState({
        showReplyEditor: false,
        replyToComment: null,
      })
      scrollIntoEle('lists-info')
      loadComents({ filter: { page: 1 }, fresh: true })
    },
  },
  {
    match: gqRes('deleteComment'),
    action: ({ deleteComment }) => {
      debug('deleteComment', deleteComment)
      commentsConflict.markState({
        tobeDeleteId: null,
      })
      scrollIntoEle('lists-info')
      loadComents({ filter: { page: 1 }, fresh: true })
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
