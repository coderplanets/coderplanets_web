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

let store = null

/* DESC_INSERTED, ASC_INSERTED */
const defaultArgs = {
  fresh: false,
  filter: { page: 1, size: PAGE_SIZE.COMMENTS, sort: TYPE.ASC_INSERTED },
}

export const loadComents = (args = {}) => {
  // debug('loadComents passed in: ', args)
  args = R.mergeDeepRight(defaultArgs, args)
  args.id = store.viewingData.id
  args.userHasLogin = store.isLogin
  args.thread = store.activeThread

  markLoading(args.fresh)
  store.markState({ filterType: args.filter.sort })

  sr71$.query(S.pagedComments, args)
}

const markLoading = fresh => {
  if (fresh) {
    return store.markState({ loadingFresh: true })
  }
  return store.markState({ loading: true })
}

export function createComment() {
  if (!store.validator('create')) return false

  store.markState({ creating: true })
  const args = {
    id: store.viewingData.id,
    body: store.editContent,
    thread: store.activeThread,
  }

  debug('createComment args: ', args)
  sr71$.mutate(S.createComment, args)
}

export function createCommentPreview() {
  store.markState({
    showInputEditor: false,
    showInputPreview: true,
  })
}

export function backToEditor() {
  store.markState({
    showInputEditor: true,
    showInputPreview: false,
  })
}

export function previewReply(data) {
  debug('previewReply --> : ', data)
}

export function openInputBox() {
  store.markState({
    showInputBox: true,
    showInputEditor: true,
  })
}

export function openCommentEditor() {
  store.markState({
    showInputEditor: true,
  })
}

export function onCommentInputBlur() {
  store.markState({
    showInputBox: false,
    showInputPreview: false,
    showInputEditor: false,
  })
}

export function createReplyComment() {
  if (!store.validator('reply')) return false

  sr71$.mutate(S.replyComment, {
    id: store.replyToComment.id,
    body: store.replyContent,
  })
}

export function onCommentInputChange(editContent) {
  store.markState({
    countCurrent: countWords(editContent),
    extractMentions: extractMentions(editContent),
    editContent,
  })
}
export function onReplyInputChange(replyContent) {
  store.markState({
    countCurrent: countWords(replyContent),
    extractMentions: extractMentions(replyContent),
    replyContent,
  })
}

export function openReplyEditor(data) {
  store.markState({
    showReplyBox: true,
    showReplyEditor: true,
    showReplyPreview: false,
    replyToComment: data,
  })
}

export function replyCommentPreview() {
  debug('replyCommentPreview')

  store.markState({
    showReplyEditor: false,
    showReplyPreview: true,
  })
}

export function replyBackToEditor() {
  store.markState({
    showReplyEditor: true,
    showReplyPreview: false,
  })
}

export function closeReplyBox() {
  store.markState({
    showReplyBox: false,
    showReplyEditor: false,
    showReplyPreview: false,
  })
}

export function onFilterChange(filterType) {
  store.markState({ filterType })
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
  store.addReferUser(user)
}

export function deleteComment() {
  sr71$.mutate(S.deleteComment, {
    id: store.tobeDeleteId,
  })
}

// show delete confirm
export function onDelete(comment) {
  store.markState({
    tobeDeleteId: comment.id,
  })
}

export function cancleDelete() {
  store.markState({
    tobeDeleteId: null,
  })
}

export function pageChange(page = 1) {
  scrollIntoEle('lists-info')
  loadComents({ filter: { page, sort: store.filterType } })
}

const cancelLoading = () => {
  store.markState({ loading: false, loadingFresh: false, creating: false })
}

// ###############################
// Data & Error handlers
// ###############################
const DataSolver = [
  {
    match: asyncRes('pagedComments'),
    action: ({ pagedComments }) => {
      cancelLoading()
      store.markState({ pagedComments })
    },
  },
  {
    match: asyncRes('createComment'),
    action: () => {
      store.markState({
        showInputBox: false,
        showInputEditor: false,
        editContent: '',
        creating: false,
        loading: false,
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
      store.markState({
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
      store.updateOneComment(likeComment.id, likeComment),
  },
  {
    match: asyncRes('undoLikeComment'),
    action: ({ undoLikeComment }) =>
      store.updateOneComment(undoLikeComment.id, undoLikeComment),
  },
  {
    match: asyncRes('dislikeComment'),
    action: ({ dislikeComment }) =>
      store.updateOneComment(dislikeComment.id, dislikeComment),
  },
  {
    match: asyncRes('undoDislikeComment'),
    action: ({ undoDislikeComment }) =>
      store.updateOneComment(undoDislikeComment.id, undoDislikeComment),
  },
  {
    match: asyncRes('deleteComment'),
    action: ({ deleteComment }) => {
      debug('deleteComment', deleteComment)
      store.markState({ tobeDeleteId: null })
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

export function init(_store) {
  if (store) {
    loadComents()
    return false
  }

  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  loadComents()
}
