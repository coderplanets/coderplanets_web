import type { TEmotionType } from '@/spec'

const EMOTION = {
  DOWNVOTE: 'downvote',
  BEER: 'beer',
  HEART: 'heart',
  CONFUSED: 'confused',
  POPCORN: 'popcorn',
  PILL: 'pill',
} as Record<Uppercase<TEmotionType>, TEmotionType>

export default EMOTION
