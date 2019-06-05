import R from 'ramda'
import { useEffect } from 'react'

import { PAGE_SIZE } from '@config'
import {
  asyncRes,
  asyncErr,
  buildLog,
  EVENT,
  ERR,
  TYPE,
  $solver,
  scrollIntoEle,
  countWords,
  dispatchEvent,
  extractMentions,
  errRescue,
  BStore,
} from '@utils'

import SR71 from '@utils/async/sr71'
import S from './schema'

const sr71$ = new SR71()
let sub$ = null
let store = null

let saveDraftTimmer = null

/* eslint-disable-next-line */
const log = buildLog('L:Comments')

/* DESC_INSERTED, ASC_INSERTED */
const defaultArgs = {
  fresh: false,
  filter: { page: 1, size: PAGE_SIZE.D, sort: TYPE.ASC_INSERTED },
}

export const loadComents = (args = {}) => {
  // log('loadComents passed in: ', args)
  args = R.mergeDeepRight(defaultArgs, args)
  args.id = store.viewingData.id
  args.userHasLogin = store.isLogin
  args.thread = store.activeThread

  markLoading(args.fresh)
  store.markState({ filterType: args.filter.sort })

  log('pagedComments args: ', args)
  sr71$.query(S.pagedComments, args)
}

const markLoading = fresh => {
  if (fresh) {
    return store.markState({ loadingFresh: true })
  }
  return store.markState({ loading: true })
}

/* eslint-disable-next-line */
export const createComment = R.curry((cb, e) => {
  if (!store.validator('create')) return false

  store.markState({ creating: true })
  const args = {
    id: store.viewingData.id,
    body: store.editContent,
    thread: store.activeThread,
    community: store.communityRaw,
    mentionUsers: R.map(user => ({ id: user.id }), store.referUsersData),
  }

  log('createComment args: ', args)
  sr71$.mutate(S.createComment, args)
  cb()
})

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
  log('previewReply --> : ', data)
}

export const openInputBox = () => {
  if (!store.isLogin) return store.authWarning({ hideToast: true })

  initDraftTimmer()
  store.markState({
    showInputBox: true,
    showInputEditor: true,
  })
}

export const openCommentEditor = () => {
  initDraftTimmer()

  store.markState({
    showInputEditor: true,
  })
}

export const onCommentInputBlur = () =>
  store.markState({
    showInputBox: false,
    showInputPreview: false,
    showInputEditor: false,
  })

export const createReplyComment = () => {
  if (!store.validator('reply')) return false

  if (store.isEdit) {
    return sr71$.mutate(S.updateComment, {
      id: store.editCommentData.id,
      body: store.replyContent,
      thread: store.activeThread,
    })
  }

  sr71$.mutate(S.replyComment, {
    id: store.replyToComment.id,
    body: store.replyContent,
    community: store.curCommunity.raw,
    thread: store.activeThread,
    mentionUsers: R.map(user => ({ id: user.id }), store.referUsersData),
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

export const openUpdateEditor = data =>
  store.markState({
    isEdit: true,
    showReplyBox: true,
    showReplyEditor: true,
    showReplyPreview: false,
    editComment: data,
    replyContent: data.body,
  })

export const openReplyEditor = data => {
  initDraftTimmer()

  store.markState({
    showReplyBox: true,
    showReplyEditor: true,
    showReplyPreview: false,
    replyToComment: data,
    replyContent: '',
    isEdit: false,
  })
}

export const replyCommentPreview = () =>
  store.markState({
    showReplyEditor: false,
    showReplyPreview: true,
  })

export const replyBackToEditor = () =>
  store.markState({
    showReplyEditor: true,
    showReplyPreview: false,
  })

export const closeReplyBox = () => {
  store.markState({
    showReplyBox: false,
    showReplyEditor: false,
    showReplyPreview: false,
  })
}

export const onFilterChange = filterType => {
  store.markState({ filterType })
  loadComents({ filter: { page: 1, sort: filterType } })
}

export const toggleLikeComment = comment => {
  // TODO: check login first
  log('likeComment: ', comment)

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
    thread: store.activeThread,
  })

// show delete confirm
export const onDelete = comment => store.markState({ tobeDeleteId: comment.id })
export const cancleDelete = () => store.markState({ tobeDeleteId: null })

export const pageChange = (page = 1) => {
  scrollIntoEle('lists-info')
  loadComents({ filter: { page, sort: store.filterType } })
}

const cancelLoading = () =>
  store.markState({ loading: false, loadingFresh: false, creating: false })

export const onReplyEditorClose = () => {
  closeReplyBox()
  onCommentInputBlur()
}

const saveDraftIfNeed = content => {
  if (R.isEmpty(content)) return false
  const curDraftContent = BStore.get('recentDraft')

  if (curDraftContent !== content) BStore.set('recentDraft', content)
}

const clearDraft = () => BStore.set('recentDraft', '')

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
      stopDraftTimmer()
      clearDraft()
      loadComents({
        filter: { page: 1, sort: TYPE.DESC_INSERTED },
        fresh: true,
      })
    },
  },
  {
    match: asyncRes('replyComment'),
    action: () => {
      store.markState({
        showReplyBox: false,
        replyToComment: null,
      })
      scrollIntoEle('lists-info')
      stopDraftTimmer()
      clearDraft()
      loadComents({ filter: { page: 1 }, fresh: true })
    },
  },
  {
    match: asyncRes('updateComment'),
    action: ({ updateComment: { id, body } }) => {
      store.markState({
        showReplyBox: false,
        isEdit: false,
        editComment: null,
        replyContent: '',
      })
      store.updateOneComment(id, { body })
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
      log('deleteComment', deleteComment)
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

const stopDraftTimmer = () => {
  if (saveDraftTimmer) clearInterval(saveDraftTimmer)
}

const initDraftTimmer = () => {
  stopDraftTimmer()

  saveDraftTimmer = setInterval(() => {
    const { showReplyEditor, editContent, replyContent } = store

    if (showReplyEditor) return saveDraftIfNeed(replyContent)
    saveDraftIfNeed(editContent)
  }, 3000)
}

// ###############################
// init & uninit
// ###############################
export const useInit = (_store, ssr) => {
  useEffect(
    () => {
      // log('effect init')
      store = _store
      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

      if (!ssr) loadComents({ filter: { sort: TYPE.DESC_INSERTED } })

      return () => {
        // log('effect uninit')
        if (store.loading || store.loadingFresh || !sub$) return false

        stopDraftTimmer()
        sr71$.stop()
        sub$.unsubscribe()
        sub$ = null
      }
    },
    [_store, ssr]
  )
}

/*
export const init = (_store, ssr = false) => {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  if (!ssr) return loadComents({ filter: { sort: TYPE.DESC_INSERTED } })
}

export const uninit = () => {
  if (store.loading || store.loadingFresh || !sub$) return false
  stopDraftTimmer()
  sr71$.stop()
  sub$.unsubscribe()
  sub$ = null
}
*/
