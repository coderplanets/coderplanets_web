import { SIZE } from '@/constant'

export const getIconSize = (size) => {
  switch (size) {
    case SIZE.SMALL: {
      return '14px'
    }

    default: {
      return '18px'
    }
  }
}

export const getFontSize = (size) => {
  switch (size) {
    case SIZE.SMALL: {
      return '12px'
    }

    default: {
      return '14px'
    }
  }
}

export const getBorderRadius = (size) => {
  switch (size) {
    case SIZE.SMALL: {
      return '4px'
    }

    default: {
      return '8px'
    }
  }
}
