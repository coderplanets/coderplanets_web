import type { TSIZE_SM } from '@/spec'
import { SIZE } from '@/constant'

export const getFontSize = (size: TSIZE_SM): string => {
  switch (size) {
    case SIZE.MEDIUM: {
      return '14px'
    }

    default:
      return '13px'
  }
}

export const holder = 1
