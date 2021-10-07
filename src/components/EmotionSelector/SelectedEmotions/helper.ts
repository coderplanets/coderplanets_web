import { keys } from 'ramda'
import type { TEmotion, TEmotionType } from '@/spec'

export const getEmotionName = (item: TEmotion): TEmotionType => {
  const eCountKey = keys(item)[0] as string
  return eCountKey.split('Count')[0] as TEmotionType
}

export const holder = 1
