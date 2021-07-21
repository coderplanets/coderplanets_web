import type { TUpvoteLayout } from '@/spec'
import { UPVOTE_LAYOUT } from '@/constant'

export const getIconSize = (type: TUpvoteLayout): string => {
  switch (type) {
    case UPVOTE_LAYOUT.ARTICLE: {
      return '30px;'
    }

    case UPVOTE_LAYOUT.WORKS_ARTICLE: {
      return '22px;'
    }

    default: {
      return ' 18px;'
    }
  }
}

export const getIconShadowSize = (type: TUpvoteLayout): string => {
  switch (type) {
    case 'article': {
      return '36px;'
    }

    case UPVOTE_LAYOUT.WORKS_ARTICLE: {
      return '30px;'
    }

    default: {
      return ' 23px;'
    }
  }
}

export const getShadowLeftOffset = (type: TUpvoteLayout): string => {
  switch (type) {
    case UPVOTE_LAYOUT.WORKS_ARTICLE: {
      return '-4px'
    }

    default: {
      return '-3px'
    }
  }
}

export const getShadowTopOffset = (type: TUpvoteLayout): string => {
  switch (type) {
    case UPVOTE_LAYOUT.WORKS_ARTICLE: {
      return '-3px'
    }

    default: {
      return '-2px'
    }
  }
}

export const getWindowLeftOffset = (type: TUpvoteLayout): string => {
  switch (type) {
    case UPVOTE_LAYOUT.WORKS_ARTICLE: {
      return '8px'
    }

    default: {
      return '7px'
    }
  }
}

export const getWindowTopOffset = (type: TUpvoteLayout): string => {
  switch (type) {
    case UPVOTE_LAYOUT.WORKS_ARTICLE: {
      return '10px'
    }

    default: {
      return '8px'
    }
  }
}
