import { useEffect } from 'react'
import { isEmpty, reject, equals } from 'ramda'

import type { TComment, TID, TEmotionType, TEditValue } from '@/spec'
import { ANCHOR, EVENT, ERR } from '@/constant'

import asyncSuit from '@/utils/async'
import BStore from '@/utils/bstore'
import { errRescue, authWarn, titleCase } from '@/utils/helper'
import { buildLog } from '@/utils/logger'
import { scrollIntoEle } from '@/utils/dom'
import { updateEditing } from '@/utils/mobx'

import uid from '@/utils/uid'

import { API_MODE, EDIT_MODE, MODE } from './constant'

import type { TMode, TAPIMode } from './spec'
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
const PAGI_SIZE = 30

// 回复列表内的翻页页标记录
let repliesPagiNo = {}

const getRepliesPagiNo = (parentId: TID): number => {
  const curNo = repliesPagiNo[parentId]

  return curNo ? curNo + 1 : 1
}

export const loadCommentsState = (): void => {
  const { viewingArticle: article } = store
  const args = {
    id: article.id,
    thread: article.meta.thread,
    freshkey: uid.gen(),
  }

  log('loadCommentsState args: ', args)
  sr71$.query(S.commentsState, args)
}

export const loadPublishedComemnts = (page = 1): void => {
  store.mark({ loading: true, mode: MODE.TIMELINE })

  const args = {
    login: store.viewingUser.login,
    filter: { page, size: PAGI_SIZE },
  }
  log('pagedPublishedComments args: ', args)
  sr71$.query(S.pagedPublishedComments, args)
}

export const loadComments = (page = 1): void => {
  store.mark({ loading: true })
  const { viewingArticle: article, mode } = store

  const args = {
    id: article.id,
    thread: article.meta.thread,
    mode,
    filter: { page, size: PAGI_SIZE },
  }
  log('loadComments args: ', args)
  sr71$.query(S.pagedComments, args)
}

export const loadCommentReplies = (id: TID): void => {
  const filter = { page: getRepliesPagiNo(id), size: 30 }
  const args = { id, filter }

  store.mark({ repliesParentId: id, repliesLoading: true })
  log('loadCommentReplies args: ', args)
  sr71$.query(S.pagedCommentReplies, args)
}

export const createComment = (): void => {
  if (!store.isReady) return

  const args = {
    id: store.viewingArticle.id,
    body: store.commentBody,
    thread: store.activeThread,
  }

  log('createComment args: ', args)
  store.mark({ publishing: true })
  sr71$.mutate(S.createComment, args)
}

export const updateComment = (): void => {
  if (!store.isReady) return

  const args = {
    id: store.updateId,
    body: store.updateBody,
  }

  log('updateComment args: ', args)
  store.mark({ publishing: true })
  sr71$.mutate(S.updateComment, args)
}

export const openEditor = (): void => {
  if (!store.isLogin) return authWarn({ hideToast: true })

  initDraftTimmer()

  store.mark({ showEditor: true })
}

export const closeEditor = (): void => {
  store.mark({ showEditor: false })
}

export const openUpdateEditor = (comment: TComment): void => {
  store.mark({ showUpdateEditor: true })
  return sr71$.query(S.oneComment, { id: comment.id })
}

export const closeUpdateEditor = (): void => {
  store.mark({ showUpdateEditor: false, updateId: null })
}

export const closeReplyEditor = (): void => {
  store.mark({ closeReplyEditor: false, replyToComment: null })
}

export const replyComment = (): void => {
  const { replyToComment, replyBody } = store
  const variables = { id: replyToComment.id, body: replyBody }
  store.mark({ publishing: true })
  return sr71$.mutate(S.replyComment, variables)
}

export const commentOnChange = (e: TEditValue, key: string): void => {
  updateEditing(store, key, e)
}

export const setWordsCountState = (wordsCountReady: boolean): void => {
  store?.mark({ wordsCountReady })
}

export const openReplyEditor = (comment: TComment): void => {
  if (!store.isLogin) return authWarn({ hideToast: true })

  initDraftTimmer()
  store.mark({
    showReplyEditor: true,
    replyToComment: comment,
  })
}

export const replyCommentPreview = (): void =>
  store.mark({
    showReplyEditor: false,
  })

export const replyBackToEditor = (): void =>
  store.mark({
    showReplyEditor: true,
  })

export const closeReplyBox = (): void => {
  store.mark({
    showReplyEditor: false,
  })
}

export const onModeChange = (mode: TMode): void => {
  store.mark({ mode, needRefreshState: false })
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
    store.updateOneComment(comment, {
      upvotesCount: upvotesCount + 1,
      viewerHasUpvoted: !viewerHasUpvoted,
    })
    sr71$.mutate(S.upvoteComment, { id })
  } else {
    store.updateOneComment(comment, {
      upvotesCount: upvotesCount - 1,
      viewerHasUpvoted: !viewerHasUpvoted,
    })

    sr71$.mutate(S.undoUpvoteComment, { id })
  }
}

export const onMentionSearch = (name: string): void => {
  if (name?.length >= 1) {
    sr71$.query(S.searchUsers, { name })
  } else {
    store.updateMentionList([])
  }
}

export const deleteComment = (): void => {
  sr71$.mutate(S.deleteComment, {
    thread: store.activeThread,
  })
}

/**
 * load the same mode when page change
 */
export const onPageChange = (page = 1): void => {
  const { apiMode } = store
  if (apiMode === API_MODE.ARTICLE) {
    store.mark({ needRefreshState: false })
    loadComments(page)
  } else {
    loadPublishedComemnts(page)
  }

  scrollIntoEle(ANCHOR.COMMENTS_ID)
}

const cancelLoading = () => store.mark({ loading: false })

export const onReplyEditorClose = (): void => {
  closeReplyBox()
  // onCommentInputBlur()
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
    match: asyncRes('commentsState'),
    action: ({ commentsState }) => {
      log('## commentsState -> ', commentsState)
      store.mark({ ...commentsState })
    },
  },
  {
    match: asyncRes('oneComment'),
    action: ({ oneComment }) => {
      store.mark({ updateId: oneComment.id, updateBody: oneComment.body })
    },
  },
  {
    match: asyncRes('pagedComments'),
    action: ({ pagedComments }) => {
      cancelLoading()
      log('# pagedComments --> ', pagedComments)
      repliesPagiNo = {}
      store.mark({ pagedComments, loading: false })

      if (store.needRefreshState) {
        loadCommentsState()
      }
    },
  },
  {
    match: asyncRes('pagedCommentReplies'),
    action: ({ pagedCommentReplies }) => {
      // cancelLoading()
      log('# pagedCommentReplies --> ', pagedCommentReplies)
      store.addToReplies(pagedCommentReplies.entries)

      repliesPagiNo[store.repliesParentId] = pagedCommentReplies.pageNumber
      store.mark({ repliesParentId: null, repliesLoading: false })
    },
  },

  {
    match: asyncRes('pagedPublishedComments'),
    action: ({ pagedPublishedComments }) => {
      cancelLoading()
      log('# pagedPublishedComments --> ', pagedPublishedComments)
      // repliesPagiNo = {}
      store.mark({ pagedPublishedComments, loading: false })
    },
  },

  {
    match: asyncRes('createComment'),
    action: () => {
      store.mark({ needRefreshState: true })
      loadComments()
      store.published()
      setTimeout(() => store.resetPublish(EDIT_MODE.CREATE), 500)

      stopDraftTimmer()
      clearDraft()
    },
  },
  {
    match: asyncRes('replyComment'),
    action: () => {
      store.mark({ needRefreshState: true })
      loadComments()
      store.published()
      setTimeout(() => store.resetPublish(EDIT_MODE.REPLY), 500)
      stopDraftTimmer()
      clearDraft()
    },
  },
  {
    match: asyncRes('updateComment'),
    action: ({ updateComment }) => {
      store.published()
      const { bodyHtml } = updateComment
      store.updateOneComment(updateComment, { bodyHtml })

      setTimeout(() => store.resetPublish(EDIT_MODE.UPDATE), 500)
    },
  },
  {
    match: asyncRes('upvoteComment'),
    action: ({ upvoteComment }) => {
      const { upvotesCount, viewerHasUpvoted, meta } = upvoteComment
      store.updateOneComment(upvoteComment, {
        upvotesCount,
        viewerHasUpvoted,
        meta,
      })
    },
  },
  {
    match: asyncRes('undoUpvoteComment'),
    action: ({ undoUpvoteComment }) => {
      const { upvotesCount, viewerHasUpvoted, meta } = undoUpvoteComment
      store.updateOneComment(undoUpvoteComment, {
        upvotesCount,
        viewerHasUpvoted,
        meta,
      })
    },
  },
  {
    match: asyncRes('emotionToComment'),
    action: ({ emotionToComment }) => {
      store.upvoteEmotion(emotionToComment, emotionToComment.emotions)
    },
  },
  {
    match: asyncRes('undoEmotionToComment'),
    action: ({ undoEmotionToComment }) => {
      store.upvoteEmotion(undoEmotionToComment, undoEmotionToComment.emotions)
    },
  },
  {
    match: asyncRes('deleteComment'),
    action: ({ deleteComment }) => {
      log('deleteComment', deleteComment)
      scrollIntoEle(ANCHOR.COMMENTS_ID)
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
    action: ({ details }) => {
      errRescue({ type: ERR.GRAPHQL, details, path: 'Comments' })
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
    const { commentBody } = store

    // if (showReplyEditor) return saveDraftIfNeed(replyContent)
    saveDraftIfNeed(commentBody)
  }, 3000)
}

// ###############################
// init & uninit
// ###############################
export const useInit = (
  _store: TStore,
  locked: boolean,
  apiMode: TAPIMode,
): void => {
  useEffect(() => {
    // log('effect init')
    store = _store
    store.mark({ apiMode })

    if (!sub$) {
      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
      if (apiMode === API_MODE.ARTICLE) {
        loadComments()
      } else {
        loadPublishedComemnts()
      }
    }

    return () => {
      // log('effect uninit')
      if (store.loading || !sub$) return

      stopDraftTimmer()
      sr71$.stop()
      sub$.unsubscribe()
      sub$ = null
    }
  }, [_store, locked, apiMode])
}
