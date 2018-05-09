import R from 'ramda'
import {
  gqRes,
  gqErr,
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
  loadComents({ filter: { page, sort: comments.filterType } })
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
    replyToComment: data,
  })
}

export function closeReplyBox() {
  comments.markState({
    showReplyEditor: false,
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
      debug('comments --> ', comments)
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
      loadComents({
        filter: { page: 1, sort: TYPE.DESC_INSERTED },
        fresh: true,
      })
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
    match: gqRes('likeComment'),
    action: ({ likeComment }) =>
      commentsConflict.updateOneComment(likeComment.id, likeComment),
  },
  {
    match: gqRes('undoLikeComment'),
    action: ({ undoLikeComment }) =>
      commentsConflict.updateOneComment(undoLikeComment.id, undoLikeComment),
  },
  {
    match: gqRes('dislikeComment'),
    action: ({ dislikeComment }) =>
      commentsConflict.updateOneComment(dislikeComment.id, dislikeComment),
  },
  {
    match: gqRes('undoDislikeComment'),
    action: ({ undoDislikeComment }) =>
      commentsConflict.updateOneComment(
        undoDislikeComment.id,
        undoDislikeComment
      ),
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
