import type { TSizeSM } from '@/spec'
import { SIZE } from '@/constant'

export const getFontSize = (size: TSizeSM): string => {
  switch (size) {
    case SIZE.MEDIUM: {
      return '15px'
    }

    default:
      return '14px'
  }
}

export const holder = 1
