import { SIZE } from '@/constant'

export const getIconSize = (size: string): string => {
  switch (size) {
    case SIZE.LARGE: {
      return '13px'
    }
    case SIZE.TINY: {
      return '11px'
    }
    case SIZE.SMALL: {
      return '12px'
    }
    default: {
      return '15px'
    }
  }
}

export const getTextSize = (size: string): string => {
  switch (size) {
    case SIZE.LARGE: {
      return '15px'
    }
    case SIZE.TINY: {
      return '11px'
    }
    default: {
      return '12px'
    }
  }
}

export const getMargin = (size: string): string => {
  switch (size) {
    case SIZE.LARGE: {
      return '8px'
    }
    case SIZE.TINY: {
      return '2px'
    }
    default: {
      return '4px'
    }
  }
}
