import type { TSIZE } from '@/spec'
import { SIZE } from '@/constant'

export const getFontSize = (size: TSIZE): string => {
  switch (size) {
    case SIZE.TINY: {
      return '13px'
    }
    case SIZE.LARGE: {
      return '23px'
    }
    default: {
      return '15px'
    }
  }
}

export const holder = 1
