import { useEffect } from 'react'
import { curry, isEmpty, reject, equals } from 'ramda'

import type { TUser, TComment, TID, TEmotionType } from '@/spec'
import { EVENT, ERR } from '@/constant'

import asyncSuit from '@/utils/async'
import BStore from '@/utils/bstore'
import { extractMentions, errRescue, authWarn, titleCase } from '@/utils/helper'
import { buildLog } from '@/utils/logger'
import { scrollIntoEle } from '@/utils/dom'

import type { TMode } from './spec'
import type { TStore } from './store'
import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:Comments')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  // @ts-ignore
  receive: [EVENT.RELOAD_ARTICLE],
})

let sub$ = null
let saveDraftTimmer = null
let store: TStore | undefined

// variables = %{id: post.id, thread: "POST", filter: %{page: 1, size: page_size}}
export const loadComments = (): void => {
  const { viewingArticle: article, mode } = store

  const args = {
    id: article.id,
    thread: article.meta.thread,
    mode,
    filter: { page: 1, size: 20 },
  }
  log('query args: ', args)
  store.mark({ loading: true })
  sr71$.query(S.pagedComments, args)
}

/* eslint-disable-next-line */
export const createComment = curry((cb, e) => {
  if (!store.validator('create')) return false

  store.mark({ creating: true })
  const args = {
    id: store.viewingArticle.id,
    body: store.editContent,
    thread: store.activeThread,
    community: store.communityRaw,
    mentionUsers: store.referUsersData.map((user) => ({ id: user.id })),
  }

  log('createComment args: ', args)
  sr71$.mutate(S.createComment, args)
  cb()
})

export const backToEditor = (): void =>
  store.mark({
    showInputEditor: true,
    showInputPreview: false,
  })

export const previewReply = (data): void => {
  log('previewReply --> : ', data)
}

export const openInputBox = (): void => {
  if (!store.isLogin) return authWarn({ hideToast: true })

  initDraftTimmer()
  store.mark({
    showInputBox: true,
    showInputEditor: true,
  })
}

export const openCommentEditor = (): void => {
  initDraftTimmer()

  store.mark({
    showInputEditor: true,
  })
}

export const onCommentInputBlur = (): void =>
  store.mark({
    showInputBox: false,
    showInputPreview: false,
    showInputEditor: false,
  })

export const createReplyComment = (): void => {
  if (!store.validator('reply')) return

  if (store.isEdit) {
    return sr71$.mutate(S.updateComment, {
      id: store.editCommentData.id,
      body: store.replyContent,
      thread: store.activeThread,
    })
  }

  if (store.replying) return

  store.mark({ replying: true })
  return sr71$.mutate(S.replyComment, {
    id: store.replyToComment.id,
    body: store.replyContent,
    community: store.curCommunity.raw,
    thread: store.activeThread,
    mentionUsers: store.referUsersData.map((user) => ({ id: user.id })),
  })
}

export const onCommentInputChange = (editContent): void =>
  store.mark({
    extractMentions: extractMentions(editContent),
    editContent,
  })

export const onReplyInputChange = (replyContent): void =>
  store.mark({
    extractMentions: extractMentions(replyContent),
    replyContent,
  })

export const openUpdateEditor = (data): void =>
  store.mark({
    isEdit: true,
    showReplyBox: true,
    showReplyEditor: true,
    showReplyPreview: false,
    editComment: data,
    replyContent: data.body,
  })

export const openReplyEditor = (data): void => {
  if (!store.isLogin) return authWarn({ hideToast: true })

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

export const replyCommentPreview = (): void =>
  store.mark({
    showReplyEditor: false,
    showReplyPreview: true,
  })

export const replyBackToEditor = (): void =>
  store.mark({
    showReplyEditor: true,
    showReplyPreview: false,
  })

export const closeReplyBox = (): void => {
  store.mark({
    showReplyBox: false,
    showReplyEditor: false,
    showReplyPreview: false,
  })
}

export const onModeChange = (mode: TMode): void => {
  store.mark({ mode })
  loadComments()
}

/**
 * toggle emotion action
 */
export const handleEmotion = (
  comment: TComment,
  name: TEmotionType,
  viewerHasEmotioned: boolean,
): void => {
  if (!store.isLogin) return authWarn({ hideToast: true })

  const { id } = comment
  // console.log('handleEmotion comment: ', id)
  // console.log('handleEmotion name: ', name)
  // console.log('handleEmotion viewerHasEmotioned: ', viewerHasEmotioned)
  const emotion = name.toUpperCase()

  // comment.emotions
  if (viewerHasEmotioned) {
    // instantFresh
    const emotionInfo = {
      // @ts-ignore
      [`${name}Count`]: comment.emotions[`${name}Count`] - 1,
      [`viewerHas${titleCase(name)}ed`]: false,
    }
    store.upvoteEmotion(comment, emotionInfo)
    sr71$.mutate(S.undoEmotionToComment, { id, emotion })
  } else {
    const emotionInfo = {
      // @ts-ignore
      [`${name}Count`]: comment.emotions[`${name}Count`] + 1,
      [`viewerHas${titleCase(name)}ed`]: true,
    }
    store.upvoteEmotion(comment, emotionInfo)
    // instantFresh
    sr71$.mutate(S.emotionToComment, { id, emotion })
  }
}

/**
 * toggle upvote action
 */
export const handleUpvote = (
  comment: TComment,
  viewerHasUpvoted: boolean,
): void => {
  if (!store.isLogin) return authWarn({ hideToast: true })
  const { id, upvotesCount } = comment

  if (viewerHasUpvoted) {
    store.updateUpvote(comment, {
      upvotesCount: upvotesCount + 1,
      viewerHasUpvoted: !viewerHasUpvoted,
    })
    sr71$.mutate(S.upvoteComment, { id })
  } else {
    store.updateUpvote(comment, {
      upvotesCount: upvotesCount - 1,
      viewerHasUpvoted: !viewerHasUpvoted,
    })

    sr71$.mutate(S.undoUpvoteComment, { id })
  }
}

export const onMention = (user: TUser): void => store.addReferUser(user)
export const onMentionSearch = (name: string): void => {
  if (name?.length >= 1) {
    sr71$.query(S.searchUsers, { name })
  } else {
    store.updateMentionList([])
  }
}

export const deleteComment = (): void =>
  sr71$.mutate(S.deleteComment, {
    id: store.tobeDeleteId,
    thread: store.activeThread,
  })

// show delete confirm
export const onDelete = (comment): void =>
  store.mark({ tobeDeleteId: comment.id })
export const cancelDelete = (): void => store.mark({ tobeDeleteId: null })

export const pageChange = (page = 1): void => {
  scrollIntoEle('lists-info')
}

const cancelLoading = () => store.mark({ loading: false, creating: false })

export const onReplyEditorClose = (): void => {
  closeReplyBox()
  onCommentInputBlur()
}

const saveDraftIfNeed = (content): void => {
  if (isEmpty(content)) return
  const curDraftContent = BStore.get('recentDraft')

  if (curDraftContent !== content) BStore.set('recentDraft', content)
}

const clearDraft = (): void => BStore.remove('recentDraft')

export const foldComment = (id: TID): void => {
  store.mark({ foldedCommentIds: [id, ...store.foldedCommentIds] })
}

export const expandComment = (id: TID): void => {
  store.mark({ foldedCommentIds: reject(equals(id), store.foldedCommentIds) })
}

// 只在 timeline 模式可用
export const foldAllComments = (): void => {
  const { pagedCommentsData } = store
  store.mark({ foldedCommentIds: pagedCommentsData.entries.map((c) => c.id) })
}

// 只在 timeline 模式可用
export const expandAllComments = (): void => {
  store.mark({ foldedCommentIds: [] })
}

// ###############################
// Data & Error handlers
// ###############################
const DataSolver = [
  {
    match: asyncRes('pagedComments'),
    action: ({ pagedComments }) => {
      cancelLoading()
      log('# pagedComments --> ', pagedComments)
      store.mark({ pagedComments, loading: false })
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
      // loadComents({
      //   filter: { page: 1, sort: TYPE.DESC_INSERTED },
      //   fresh: true,
      // })
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
      // loadComents({ filter: { page: 1 }, fresh: true })
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
    match: asyncRes('upvoteComment'),
    action: ({ upvoteComment }) => {
      const { upvotesCount, viewerHasUpvoted } = upvoteComment
      store.updateUpvote(upvoteComment, { upvotesCount, viewerHasUpvoted })
    },
  },
  {
    match: asyncRes('undoUpvoteComment'),
    action: ({ undoUpvoteComment }) => {
      const { upvotesCount, viewerHasUpvoted } = undoUpvoteComment
      store.updateUpvote(undoUpvoteComment, { upvotesCount, viewerHasUpvoted })
    },
  },
  {
    match: asyncRes('emotionToComment'),
    action: ({ emotionToComment }) => {
      console.log('emotionToComment -> ', emotionToComment)
      store.upvoteEmotion(emotionToComment, emotionToComment.emotions)
    },
  },
  {
    match: asyncRes('undoEmotionToComment'),
    action: ({ undoEmotionToComment }) => {
      console.log('undoEmotionToComment -> ', undoEmotionToComment)
      store.upvoteEmotion(undoEmotionToComment, undoEmotionToComment.emotions)
    },
  },
  {
    match: asyncRes('deleteComment'),
    action: ({ deleteComment }) => {
      log('deleteComment', deleteComment)
      store.mark({ tobeDeleteId: null })
      scrollIntoEle('lists-info')
      // loadComents({ filter: { page: 1 }, fresh: true })
    },
  },
  {
    match: asyncRes('searchUsers'),
    action: ({ searchUsers: { entries } }) => store.updateMentionList(entries),
  },
  {
    match: asyncRes(EVENT.RELOAD_ARTICLE),
    action: () => {
      store.mark({ loading: true })
      loadComments()
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {
      //
    },
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

const stopDraftTimmer = (): void => {
  if (saveDraftTimmer) clearInterval(saveDraftTimmer)
}

const initDraftTimmer = (): void => {
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
export const useInit = (
  _store: TStore,
  ssr: boolean,
  locked: boolean,
): void => {
  useEffect(() => {
    // log('effect init')
    store = _store
    if (!sub$) {
      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
      loadComments()
      // if (!ssr) loadComents({ filter: { sort: TYPE.DESC_INSERTED } })
    }

    return () => {
      // log('effect uninit')
      if (store.loading || !sub$) return

      stopDraftTimmer()
      sr71$.stop()
      sub$.unsubscribe()
      sub$ = null
    }
  }, [_store, ssr, locked])
}
