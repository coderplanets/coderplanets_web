import type { TSizeTSM } from '@/spec'
import { SIZE } from '@/constant'

export const getIconSize = (size: TSizeTSM): number => {
  switch (size) {
    case SIZE.MEDIUM: {
      return 14
    }

    default: {
      return 6
    }
  }
}

export const getInnerSpace = (size: TSizeTSM): number => {
  switch (size) {
    case SIZE.SMALL: {
      return 4
    }

    case SIZE.MEDIUM: {
      return 6
    }

    default: {
      return 2
    }
  }
}

export const getTitleSize = (size: TSizeTSM): string => {
  switch (size) {
    case SIZE.SMALL: {
      return '12px'
    }

    case SIZE.MEDIUM: {
      return '13px'
    }

    default: {
      return '11px'
    }
  }
}
