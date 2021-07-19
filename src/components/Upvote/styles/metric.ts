import type { TUpvote } from '@/spec'

export const getIconSize = (type: TUpvote): string => {
  switch (type) {
    case 'article': {
      return '30px;'
    }

    case 'works-article': {
      return '22px;'
    }

    default: {
      return ' 18px;'
    }
  }
}

export const getIconShadowSize = (type: TUpvote): string => {
  switch (type) {
    case 'article': {
      return '36px;'
    }

    case 'works-article': {
      return '30px;'
    }

    default: {
      return ' 23px;'
    }
  }
}

export const getShadowLeftOffset = (type: TUpvote): string => {
  switch (type) {
    case 'works-article': {
      return '-4px'
    }

    default: {
      return '-3px'
    }
  }
}

export const getShadowTopOffset = (type: TUpvote): string => {
  switch (type) {
    case 'works-article': {
      return '-3px'
    }

    default: {
      return '-2px'
    }
  }
}

export const getWindowLeftOffset = (type: TUpvote): string => {
  switch (type) {
    case 'works-article': {
      return '8px'
    }

    default: {
      return '7px'
    }
  }
}

export const getWindowTopOffset = (type: TUpvote): string => {
  switch (type) {
    case 'works-article': {
      return '10px'
    }

    default: {
      return '8px'
    }
  }
}
