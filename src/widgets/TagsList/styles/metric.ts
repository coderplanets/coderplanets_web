import type { TSIZE_TSM } from '@/spec'
import { SIZE } from '@/constant'

export const getIconSize = (size: TSIZE_TSM): number => {
  switch (size) {
    case SIZE.MEDIUM: {
      return 14
    }

    default: {
      return 12
    }
  }
}

export const getTitleSize = (size: TSIZE_TSM): string => {
  switch (size) {
    case SIZE.MEDIUM: {
      return '13px'
    }

    default: {
      return '11px'
    }
  }
}
