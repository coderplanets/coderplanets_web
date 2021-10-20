import { useEffect } from 'react'
import { isEmpty, reject, equals } from 'ramda'

import type { TComment, TID, TEmotionType, TEditValue } from '@/spec'
import { EVENT, ERR } from '@/constant'

import asyncSuit from '@/utils/async'
import BStore from '@/utils/bstore'
import { errRescue, authWarn, titleCase } from '@/utils/helper'
import { buildLog } from '@/utils/logger'
import { scrollIntoEle } from '@/utils/dom'
import { updateEditing } from '@/utils/mobx'

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
export const loadComments = (page = 1): void => {
  const { viewingArticle: article, mode } = store

  const args = {
    id: article.id,
    thread: article.meta.thread,
    mode,
    filter: { page, size: 20 },
  }
  log('query args: ', args)
  store.mark({ loading: true })
  sr71$.query(S.pagedComments, args)
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
  store.mark({ showUpdateEditor: false, updateId: '' })
}

export const createReplyComment = (): void => {
  if (!store.validator('reply')) return

  if (store.isEdit) {
    return sr71$.mutate(S.updateComment, {
      // id: store.editCommentData.id,
      body: store.replyContent,
      thread: store.activeThread,
    })
  }

  return sr71$.mutate(S.replyComment, {
    id: store.replyToComment.id,
    body: store.replyContent,
    community: store.curCommunity.raw,
    thread: store.activeThread,
  })
}

export const commentOnChange = (e: TEditValue, key: string): void => {
  updateEditing(store, key, e)
}

export const setWordsCountState = (wordsCountReady: boolean): void => {
  store?.mark({ wordsCountReady })
}

export const openReplyEditor = (data): void => {
  if (!store.isLogin) return authWarn({ hideToast: true })

  initDraftTimmer()
  store.mark({
    showReplyBox: true,
    showReplyEditor: true,
    replyToComment: data,
    replyContent: '',
    isEdit: false,
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
    showReplyBox: false,
    showReplyEditor: false,
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
  console.log('foldComment: ', id)
  store.mark({ foldedCommentIds: [id, ...store.foldedCommentIds] })
}

export const expandComment = (id: TID): void => {
  console.log('expandComment: ', id)
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
      store.mark({ pagedComments, loading: false })
    },
  },
  {
    match: asyncRes('createComment'),
    action: () => {
      store.mark({ loading: true, publishing: false, publishDone: true })
      loadComments()
      setTimeout(() => {
        store.mark({
          showEditor: false,
          commentBody: '',
          publishDone: false,
        })
      }, 500)
      stopDraftTimmer()
      clearDraft()
    },
  },
  {
    match: asyncRes('replyComment'),
    action: () => {
      store.mark({
        showReplyBox: false,
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
    action: ({ updateComment: { id, bodyHtml } }) => {
      store.mark({ showUpdateEditor: false })
      store.updateOneComment(id, { bodyHtml })
    },
  },
  {
    match: asyncRes('upvoteComment'),
    action: ({ upvoteComment }) => {
      const { upvotesCount, viewerHasUpvoted, meta } = upvoteComment
      store.updateUpvote(upvoteComment, {
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
      store.updateUpvote(undoUpvoteComment, {
        upvotesCount,
        viewerHasUpvoted,
        meta,
      })
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
    const { showReplyEditor, commentBody, replyContent } = store

    if (showReplyEditor) return saveDraftIfNeed(replyContent)
    saveDraftIfNeed(commentBody)
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
