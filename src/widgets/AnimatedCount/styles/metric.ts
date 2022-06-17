import type { TSize } from '@/spec'
import { SIZE } from '@/constant'

import { theme } from '@/utils/css'

export const getFontSize = (size: TSize): string => {
  switch (size) {
    case SIZE.TINY: {
      return '14px'
    }
    case SIZE.MEDIUM: {
      return '18px'
    }
    case SIZE.LARGE: {
      return '23px'
    }
    default: {
      return '15px'
    }
  }
}

export const getCountColor = ($active: boolean, count: number): string => {
  if ($active) return '#139C9E'
  if (count === 0) return theme('thread.articleDigest')
  if (count >= 5) return theme('thread.extraInfo')

  return theme('thread.extraInfo')
}
