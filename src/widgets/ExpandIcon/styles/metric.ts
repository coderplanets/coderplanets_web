import { theme } from '@/utils/css'
import { SIZE } from '@/constant'

import type { TTheme } from '@/spec'

export const getNormalColor = (type: string): TTheme => {
  switch (type) {
    case 'green':
      return theme('baseColor.green')

    default:
      return theme('thread.articleDigest')
  }
}

export const getActiveColor = (type: string): TTheme => {
  switch (type) {
    case 'green':
      return theme('baseColor.green')

    default:
      return theme('thread.articleTitle')
  }
}

export const getNormalIconSize = (size: string): TTheme => {
  switch (size) {
    case SIZE.SMALL:
      return '11px'

    default:
      return '18px'
  }
}

export const getActiveIconSize = (size: string): TTheme => {
  switch (size) {
    case SIZE.SMALL:
      return '12px'

    default:
      return '15px'
  }
}

export const getNormalTextSize = (size: string): TTheme => {
  switch (size) {
    case SIZE.SMALL:
      return '11px'

    default:
      return '14px'
  }
}
