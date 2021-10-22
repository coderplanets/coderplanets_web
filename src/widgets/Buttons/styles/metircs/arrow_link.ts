import { SIZE } from '@/constant'

export const getTextSize = (size: string): string => {
  switch (size) {
    case SIZE.TINY: {
      return '12px'
    }

    case SIZE.MEDIUM: {
      return '16px'
    }

    case SIZE.LARGE: {
      return '18px'
    }

    default: {
      return '14px'
    }
  }
}

export const getIconSize = (size: string): string => getTextSize(size)
