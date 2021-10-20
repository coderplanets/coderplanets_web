import type { TAccount, TComment, TID, TSubmitState } from '@/spec'

export type TMode = 'REPLIES' | 'TIMELINE'
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
  updateId: string | null
  replyToComment: TComment | null
}
