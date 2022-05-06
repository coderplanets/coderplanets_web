import type { TAccount, TComment, TID, TSubmitState } from '@/spec'

export type TMode = 'REPLIES' | 'TIMELINE'
export type TAPIMode = 'article' | 'user_published'
export type TEditMode = 'CREATE' | 'UPDATE' | 'REPLY'

export type TFoldState = {
  isAllFolded: boolean
  foldedIds: TID[]
}

export type TEditState = {
  commentBody: string
  updateBody: string
  replyBody: string
  accountInfo: TAccount
  showEditor: boolean
  showReplyEditor: boolean
  showUpdateEditor: boolean
  submitState: TSubmitState
  updateId: TID | null
  replyToComment: TComment | null
}

export type TRepliesState = {
  repliesParentId: TID | null
  repliesLoading: boolean
}
