import type { TID } from '@/spec'

export type TMode = 'REPLIES' | 'TIMELINE'
export type TFoldState = {
  isAllFolded: boolean
  foldedIds: TID[]
}
