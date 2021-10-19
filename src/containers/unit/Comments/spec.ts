import type { TID } from '@/spec'

export type TMode = 'REPLIES' | 'TIMELINE'
export type TEditMode = 'CREATE' | 'UPDATE' | 'REPLY'

export type TFoldState = {
  isAllFolded: boolean
  foldedIds: TID[]
}
