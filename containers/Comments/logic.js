import R from 'ramda'
import { PAGE_SIZE } from 'config'
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
  errRescue,
} from 'utils'

import SR71 from 'utils/async/sr71'
import S from './schema'

const sr71$ = new SR71()
let sub$ = null
let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:Comments')

/* DESC_INSERTED, ASC_INSERTED */
const defaultArgs = {
  fresh: false,
  filter: { page: 1, size: PAGE_SIZE.D, sort: TYPE.ASC_INSERTED },
}

export const loadComents = (args = {}) => {
  // debug('loadComents passed in: ', args)
  args = R.mergeDeepRight(defaultArgs, args)
  args.id = store.viewingData.id
  args.userHasLogin = store.isLogin
  args.thread = store.activeThread

  markLoading(args.fresh)
  store.markState({ filterType: args.filter.sort })

  debug('pagedComments args: ', args)
  sr71$.query(S.pagedComments, args)
}

const markLoading = fresh => {
  if (fresh) {
    return store.markState({ loadingFresh: true })
  }
  return store.markState({ loading: true })
}

export const createComment = () => {
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

export const createCommentPreview = () =>
  store.markState({
    showInputEditor: false,
    showInputPreview: true,
  })

export const backToEditor = () =>
  store.markState({
    showInputEditor: true,
    showInputPreview: false,
  })

export const previewReply = data => {
  debug('previewReply --> : ', data)
}

export const openInputBox = () => {
  if (!store.isLogin) return store.authWarning({ hideToast: true })

  store.markState({
    showInputBox: true,
    showInputEditor: true,
  })
}

export const openCommentEditor = () =>
  store.markState({
    showInputEditor: true,
  })

export const onCommentInputBlur = () =>
  store.markState({
    showInputBox: false,
    showInputPreview: false,
    showInputEditor: false,
  })

export const createReplyComment = () => {
  if (!store.validator('reply')) return false

  sr71$.mutate(S.replyComment, {
    id: store.replyToComment.id,
    body: store.replyContent,
  })
}

export const onCommentInputChange = editContent =>
  store.markState({
    countCurrent: countWords(editContent),
    extractMentions: extractMentions(editContent),
    editContent,
  })

export const onReplyInputChange = replyContent =>
  store.markState({
    countCurrent: countWords(replyContent),
    extractMentions: extractMentions(replyContent),
    replyContent,
  })

export const openReplyEditor = data =>
  store.markState({
    showReplyBox: true,
    showReplyEditor: true,
    showReplyPreview: false,
    replyToComment: data,
  })

export const replyCommentPreview = () => {
  debug('replyCommentPreview')

  store.markState({
    showReplyEditor: false,
    showReplyPreview: true,
  })
}

export const replyBackToEditor = () =>
  store.markState({
    showReplyEditor: true,
    showReplyPreview: false,
  })

export const closeReplyBox = () =>
  store.markState({
    showReplyBox: false,
    showReplyEditor: false,
    showReplyPreview: false,
  })

export const onFilterChange = filterType => {
  store.markState({ filterType })
  loadComents({ filter: { page: 1, sort: filterType } })
}

export const toggleLikeComment = comment => {
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

export const toggleDislikeComment = comment => {
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

export const onUploadImageDone = url =>
  dispatchEvent(EVENT.DRAFT_INSERT_SNIPPET, { data: `![](${url})` })

export const insertQuote = () =>
  dispatchEvent(EVENT.DRAFT_INSERT_SNIPPET, { data: '> ' })

export const insertCode = () => {
  const communityRaw = store.curCommunity.raw
  const data = `\`\`\`${communityRaw}\n\n\`\`\``

  dispatchEvent(EVENT.DRAFT_INSERT_SNIPPET, { data })
}

export const onMention = user => store.addReferUser(user)
export const onMentionSearch = name => {
  if (name && name.length >= 1) {
    sr71$.query(S.searchUsers, { name })
  } else {
    store.updateMentionList([])
  }
}

export const deleteComment = () =>
  sr71$.mutate(S.deleteComment, {
    id: store.tobeDeleteId,
  })

// show delete confirm
export const onDelete = comment =>
  store.markState({
    tobeDeleteId: comment.id,
  })

export const cancleDelete = () =>
  store.markState({
    tobeDeleteId: null,
  })

export const pageChange = (page = 1) => {
  scrollIntoEle('lists-info')
  loadComents({ filter: { page, sort: store.filterType } })
}

const cancelLoading = () =>
  store.markState({ loading: false, loadingFresh: false, creating: false })

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
  {
    match: asyncRes('searchUsers'),
    action: ({ searchUsers: { entries } }) => store.updateMentionList(entries),
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {},
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      errRescue({ type: ERR.TIMEOUT, details, path: 'Comments' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => errRescue({ type: ERR.NETWORK, path: 'Comments' }),
  },
]

export const init = (_store, ssr = false) => {
  store = _store
  debug('>>>>>>> init sub$: ', sub$)

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  if (!ssr) return loadComents()
}

export const uninit = () => {
  if (store.loading || store.loadingFresh || !sub$) return false
  debug('===== do uninit')
  sr71$.stop()
  sub$.unsubscribe()
  sub$ = null
}
