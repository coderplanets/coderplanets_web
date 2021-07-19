import type { TUpvote } from '@/spec'

export const getIconSize = (type: TUpvote): string => {
  switch (type) {
    case 'sticker': {
      return '30px;'
    }

    default: {
      return ' 18px;'
    }
  }
}

export const getIconShadowSize = (type: TUpvote): string => {
  switch (type) {
    case 'sticker': {
      return '36px;'
    }

    default: {
      return ' 23px;'
    }
  }
}
