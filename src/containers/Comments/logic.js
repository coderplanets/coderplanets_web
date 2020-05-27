import { useEffect } from 'react'
import { curry, isEmpty, mergeDeepRight } from 'ramda'

import { PAGE_SIZE } from '@/config'
import { TYPE, EVENT, ERR } from '@/constant'
import {
  asyncSuit,
  buildLog,
  scrollIntoEle,
  countWords,
  send,
  extractMentions,
  errRescue,
  BStore,
} from '@/utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:Comments')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store = null
let saveDraftTimmer = null

/* DESC_INSERTED, ASC_INSERTED */
const defaultArgs = {
  fresh: false,
  filter: { page: 1, size: PAGE_SIZE.D, sort: TYPE.ASC_INSERTED },
}

export const loadComents = (args = {}) => {
  // log('loadComents passed in: ', args)
  if (store.loading || store.loadingFresh) return false
  args = mergeDeepRight(defaultArgs, args)
  args.id = store.viewingData.id
  args.userHasLogin = store.isLogin
  args.thread = store.activeThread

  markLoading(args.fresh)
  store.mark({ filterType: args.filter.sort })

  log('pagedComments args: ', args)
  sr71$.query(S.pagedComments, args)
}

const markLoading = fresh => {
  if (fresh) {
    return store.mark({ loadingFresh: true })
  }
  return store.mark({ loading: true })
}

/* eslint-disable-next-line */
export const createComment = curry((cb, e) => {
  if (!store.validator('create')) return false

  store.mark({ creating: true })
  const args = {
    id: store.viewingData.id,
    body: store.editContent,
    thread: store.activeThread,
    community: store.communityRaw,
    mentionUsers: store.referUsersData.map(user => ({ id: user.id })),
  }

  log('createComment args: ', args)
  sr71$.mutate(S.createComment, args)
  cb()
})

export const createCommentPreview = () =>
  store.mark({
    showInputEditor: false,
    showInputPreview: true,
  })

export const backToEditor = () =>
  store.mark({
    showInputEditor: true,
    showInputPreview: false,
  })

export const previewReply = data => {
  log('previewReply --> : ', data)
}

export const openInputBox = () => {
  if (!store.isLogin) return store.authWarning({ hideToast: true })

  initDraftTimmer()
  store.mark({
    showInputBox: true,
    showInputEditor: true,
  })
}

export const openCommentEditor = () => {
  initDraftTimmer()

  store.mark({
    showInputEditor: true,
  })
}

export const onCommentInputBlur = () =>
  store.mark({
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

  if (store.replying) return false

  store.mark({ replying: true })
  return sr71$.mutate(S.replyComment, {
    id: store.replyToComment.id,
    body: store.replyContent,
    community: store.curCommunity.raw,
    thread: store.activeThread,
    mentionUsers: store.referUsersData.map(user => ({ id: user.id })),
  })
}

export const onCommentInputChange = editContent =>
  store.mark({
    countCurrent: countWords(editContent),
    extractMentions: extractMentions(editContent),
    editContent,
  })

export const onReplyInputChange = replyContent =>
  store.mark({
    countCurrent: countWords(replyContent),
    extractMentions: extractMentions(replyContent),
    replyContent,
  })

export const openUpdateEditor = data =>
  store.mark({
    isEdit: true,
    showReplyBox: true,
    showReplyEditor: true,
    showReplyPreview: false,
    editComment: data,
    replyContent: data.body,
  })

export const openReplyEditor = data => {
  if (!store.isLogin) return store.authWarning()

  initDraftTimmer()
  store.mark({
    showReplyBox: true,
    showReplyEditor: true,
    showReplyPreview: false,
    replyToComment: data,
    replyContent: '',
    isEdit: false,
  })
}

export const replyCommentPreview = () =>
  store.mark({
    showReplyEditor: false,
    showReplyPreview: true,
  })

export const replyBackToEditor = () =>
  store.mark({
    showReplyEditor: true,
    showReplyPreview: false,
  })

export const closeReplyBox = () => {
  store.mark({
    showReplyBox: false,
    showReplyEditor: false,
    showReplyPreview: false,
  })
}

export const onFilterChange = filterType => {
  store.mark({ filterType })
  loadComents({ filter: { page: 1, sort: filterType } })
}

/**
 * toggle like action
 *
 * @param {object} comment
 * @param {comment.id} string
 * @returns
 */
export const toggleLikeComment = comment => {
  if (!store.isLogin) return store.authWarning()
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

export const onUploadImageDone = url =>
  send(EVENT.DRAFT_INSERT_SNIPPET, { data: `![](${url})` })

export const insertQuote = () =>
  send(EVENT.DRAFT_INSERT_SNIPPET, { data: '> ' })

export const insertCode = () => {
  const communityRaw = store.curCommunity.raw
  const data = `\`\`\`${communityRaw}\n\n\`\`\``

  send(EVENT.DRAFT_INSERT_SNIPPET, { data })
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
export const onDelete = comment => store.mark({ tobeDeleteId: comment.id })
export const cancleDelete = () => store.mark({ tobeDeleteId: null })

export const pageChange = (page = 1) => {
  scrollIntoEle('lists-info')
  loadComents({ filter: { page, sort: store.filterType } })
}

const cancelLoading = () =>
  store.mark({ loading: false, loadingFresh: false, creating: false })

export const onReplyEditorClose = () => {
  closeReplyBox()
  onCommentInputBlur()
}

const saveDraftIfNeed = content => {
  if (isEmpty(content)) return false
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
      store.mark({ pagedComments })
    },
  },
  {
    match: asyncRes('createComment'),
    action: () => {
      store.mark({
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
      store.mark({
        showReplyBox: false,
        replying: false,
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
      store.mark({
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
      store.mark({ tobeDeleteId: null })
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
  useEffect(() => {
    // log('effect init')
    store = _store
    if (!sub$) {
      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
      if (!ssr) loadComents({ filter: { sort: TYPE.DESC_INSERTED } })
    }

    return () => {
      // log('effect uninit')
      if (store.loading || store.loadingFresh || !sub$) return false

      stopDraftTimmer()
      sr71$.stop()
      sub$.unsubscribe()
      sub$ = null
    }
  }, [_store, ssr])
}
