import { SIZE } from '@/constant'

export const getIconSize = (size: string): string => {
  switch (size) {
    case SIZE.SMALL: {
      return '14px'
    }

    default: {
      return '18px'
    }
  }
}

export const getFontSize = (size: string): string => {
  switch (size) {
    case SIZE.SMALL: {
      return '12px'
    }

    default: {
      return '14px'
    }
  }
}

export const getBorderRadius = (size: string): string => {
  switch (size) {
    case SIZE.SMALL: {
      return '4px'
    }

    default: {
      return '8px'
    }
  }
}
