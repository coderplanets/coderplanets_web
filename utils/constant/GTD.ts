import type { TGtdType, TGtdState } from '@/spec'

export const GTD_TYPE = {
  FEATURE: 'FEATURE',
  BUG: 'BUG',
  DEFAULT: 'DEFAULT',
} as Record<Uppercase<TGtdType>, Uppercase<TGtdType>>

export const GTD_STATE = {
  TODO: 'TODO',
  WIP: 'WIP',
  DONE: 'DONE',
  DEFAULT: 'DEFAULT',
} as Record<Uppercase<TGtdState>, Uppercase<TGtdState>>
