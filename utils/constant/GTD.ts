import type { TGtdType, TGtdState } from '@/spec'

export const GTD_TYPE = {
  FEATURE: 'FEATURE' as TGtdType,
  BUG: 'BUT' as TGtdType,
  DEFAULT: null as TGtdType,
}

export const GTD_STATE = {
  TODO: 'TODO' as TGtdState,
  WIP: 'WIP' as TGtdState,
  DONE: 'DONE' as TGtdState,
  DEFAULT: null as TGtdState,
}
