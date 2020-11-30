import { SIZE } from '@/constant'

export const getTextSize = (size) => {
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

export const getIconSize = (size) => getTextSize(size)
