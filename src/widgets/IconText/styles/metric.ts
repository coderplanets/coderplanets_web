import type { TSize } from '@/spec'
import { SIZE } from '@/constant'

export const getIconSize = (size: TSize): string => {
  switch (size) {
    case SIZE.LARGE: {
      return '16px'
    }
    case SIZE.MEDIUM: {
      return '15px'
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

export const getTextSize = (size: TSize): string => {
  switch (size) {
    case SIZE.LARGE: {
      return '15px'
    }
    case SIZE.MEDIUM: {
      return '14px'
    }
    case SIZE.TINY: {
      return '11px'
    }
    default: {
      return '12px'
    }
  }
}

export const getMargin = (size: TSize): string => {
  switch (size) {
    case SIZE.LARGE: {
      return '8px'
    }
    case SIZE.MEDIUM: {
      return '5px'
    }
    case SIZE.TINY: {
      return '2px'
    }
    default: {
      return '4px'
    }
  }
}
