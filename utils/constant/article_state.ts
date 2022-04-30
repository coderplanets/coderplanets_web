import type { TASType, TASState } from '@/spec'

export const AS_TYPE = {
  FEATURE: 'FEATURE',
  BUG: 'BUG',
  QUESTION: 'QUESTION',
  LOCK: 'LOCK',
  DEFAULT: 'DEFAULT',
} as Record<Uppercase<TASType>, Uppercase<TASType>>

export const AS_STATE = {
  TODO: 'TODO',
  WIP: 'WIP',
  DONE: 'DONE',
  DEFAULT: 'DEFAULT',
  RESOLVE: 'RESOLVE',
  LOCK: 'LOCK',
} as Record<Uppercase<TASState>, Uppercase<TASState>>
