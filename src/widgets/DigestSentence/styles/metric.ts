import type { TSIZE_SM } from '@/spec'
import { SIZE } from '@/constant'

export const getFontSize = (size: TSIZE_SM): string => {
  switch (size) {
    case SIZE.MEDIUM: {
      return '15px'
    }

    default:
      return '14px'
  }
}

export const holder = 1
