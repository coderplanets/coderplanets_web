import type { TSIZE_SM } from '@/spec'
import { SIZE } from '@/constant'

export const getFontSize = (size: TSIZE_SM): string => {
  switch (size) {
    case SIZE.MEDIUM: {
      return '14.5px'
    }

    default:
      return '13.5px'
  }
}

export const holder = 1
