import { theme } from '@/utils'
import { SIZE } from '@/constant'

export const getNormalColor = (type) => {
  switch (type) {
    case 'green':
      return theme('baseColor.green')

    default:
      return theme('thread.articleDigest')
  }
}

export const getActiveColor = (type) => {
  switch (type) {
    case 'green':
      return theme('baseColor.green')

    default:
      return theme('thread.articleTitle')
  }
}

export const getNormalIconSize = (size) => {
  switch (size) {
    case SIZE.SMALL:
      return '11px'

    default:
      return '18px'
  }
}

export const getActiveIconSize = (size) => {
  switch (size) {
    case SIZE.SMALL:
      return '12px'

    default:
      return '15px'
  }
}

export const getNormalTextSize = (size) => {
  switch (size) {
    case SIZE.SMALL:
      return '11px'

    default:
      return '14px'
  }
}
