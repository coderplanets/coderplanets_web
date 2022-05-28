import type { TArticleCat, TArticleState } from '@/spec'

export const ARTICLE_CAT = {
  FEATURE: 'FEATURE',
  BUG: 'BUG',
  QUESTION: 'QUESTION',
  LOCK: 'LOCK',
  DEFAULT: 'DEFAULT',
} as Record<Uppercase<TArticleCat>, Uppercase<TArticleCat>>

export const ARTICLE_STATE = {
  TODO: 'TODO',
  WIP: 'WIP',
  DONE: 'DONE',
  DEFAULT: 'DEFAULT',
  RESOLVE: 'RESOLVE',
  LOCK: 'LOCK',
} as Record<Uppercase<TArticleState>, Uppercase<TArticleState>>
