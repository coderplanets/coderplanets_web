import R from 'ramda'
import {
  asyncRes,
  asyncErr,
  makeDebugger,
  EVENT,
  ERR,
  TYPE,
  $solver,
  scrollIntoEle,
  countWords,
  dispatchEvent,
  extractMentions,
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

/* DESC_INSERTED, ASC_INSERTED */
const defaultArgs = {
  fresh: false,
  filter: { page: 1, size: PAGE_SIZE.COMMENTS, sort: TYPE.ASC_INSERTED },
}

export const loadComents = (args = {}) => {
  // debug('loadComents passed in: ', args)
  args = R.mergeDeepRight(defaultArgs, args)
  args.id = comments.activeArticle.id
  args.userHasLogin = comments.isLogin

  markLoading(args.fresh)
  comments.markState({
    filterType: args.filter.sort,
  })

  debug('loadComents query: ', args)
  sr71$.query(S.comments, args)
}

const markLoading = fresh => {
  if (fresh) {
    return comments.markState({ loadingFresh: true })
  }
  return comments.markState({ loading: true })
}

export function createComment() {
  // TODO: validation...
  comments.markState({
    creating: true,
  })

  sr71$.mutate(S.createComment, {
    id: comments.activeArticle.id,
    body: comments.editContent,
  })
}

export function createCommentPreview() {
  debug('createCommentPreview')
  comments.markState({
    showInputEditor: false,
    showInputPreview: true,
  })
}

export function backToEditor() {
  comments.markState({
    showInputEditor: true,
    showInputPreview: false,
  })
}

export function previewReply(data) {
  debug('previewReply --> : ', data)
}

export function openInputBox() {
  comments.markState({
    showInputBox: true,
    showInputEditor: true,
  })
}

export function openCommentEditor() {
  comments.markState({
    showInputEditor: true,
  })
}

export function onCommentInputBlur() {
  comments.markState({
    showInputBox: false,
    showInputPreview: false,
    showInputEditor: false,
  })
}

export function createReplyComment() {
  sr71$.mutate(S.replyComment, {
    id: comments.replyToComment.id,
    body: comments.replyContent,
  })
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

export function openReplyEditor(data) {
  comments.markState({
    showReplyBox: true,
    showReplyEditor: true,
    showReplyPreview: false,
    replyToComment: data,
  })
}

export function replyCommentPreview() {
  debug('replyCommentPreview')

  comments.markState({
    showReplyEditor: false,
    showReplyPreview: true,
  })
}

export function replyBackToEditor() {
  comments.markState({
    showReplyEditor: true,
    showReplyPreview: false,
  })
}

export function closeReplyBox() {
  comments.markState({
    showReplyBox: false,
    showReplyEditor: false,
    showReplyPreview: false,
  })
}

export function onFilterChange(filterType) {
  comments.markState({
    filterType,
  })
  loadComents({ filter: { page: 1, sort: filterType } })
}

export function toggleLikeComment(comment) {
  // TODO: check login first
  debug('likeComment: ', comment)
  if (comment.viewerHasLiked) {
    return sr71$.mutate(S.undoLikeComment, {
      id: comment.id,
    })
  }
  return sr71$.mutate(S.likeComment, {
    id: comment.id,
  })
}

export function toggleDislikeComment(comment) {
  // TODO: check login first
  if (comment.viewerHasDisliked) {
    return sr71$.mutate(S.undoDislikeComment, {
      id: comment.id,
    })
  }
  return sr71$.mutate(S.dislikeComment, {
    id: comment.id,
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

export function pageChange(page = 1) {
  scrollIntoEle('lists-info')
  loadComents({ filter: { page, sort: comments.filterType } })
}

const cancelLoading = () => {
  comments.markState({ loading: false, loadingFresh: false, creating: false })
}

// ###############################
// Data & Error handlers
// ###############################
const DataSolver = [
  {
    match: asyncRes(EVENT.PREVIEW),
    action: () => {},
  },
  {
    match: asyncRes('comments'),
    action: ({ comments }) => {
      debug('comments --> ', comments)
      cancelLoading()
      commentsConflict.markState({
        ...comments,
      })
    },
  },
  {
    match: asyncRes('createComment'),
    action: ({ createComment }) => {
      debug('createComment', createComment)
      commentsConflict.markState({
        showInputEditor: false,
        editContent: '',
      })
      loadComents({
        filter: { page: 1, sort: TYPE.DESC_INSERTED },
        fresh: true,
      })
    },
  },
  {
    match: asyncRes('replyComment'),
    action: ({ replyComment }) => {
      debug('replyComment', replyComment)
      commentsConflict.markState({
        showReplyBox: false,
        replyToComment: null,
      })
      scrollIntoEle('lists-info')
      loadComents({ filter: { page: 1 }, fresh: true })
    },
  },
  {
    match: asyncRes('likeComment'),
    action: ({ likeComment }) =>
      commentsConflict.updateOneComment(likeComment.id, likeComment),
  },
  {
    match: asyncRes('undoLikeComment'),
    action: ({ undoLikeComment }) =>
      commentsConflict.updateOneComment(undoLikeComment.id, undoLikeComment),
  },
  {
    match: asyncRes('dislikeComment'),
    action: ({ dislikeComment }) =>
      commentsConflict.updateOneComment(dislikeComment.id, dislikeComment),
  },
  {
    match: asyncRes('undoDislikeComment'),
    action: ({ undoDislikeComment }) =>
      commentsConflict.updateOneComment(
        undoDislikeComment.id,
        undoDislikeComment
      ),
  },
  {
    match: asyncRes('deleteComment'),
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
  comments = selectedStore
  commentsConflict = comments

  if (sub$) sub$.unsubscribe()

  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  loadComents()
}
