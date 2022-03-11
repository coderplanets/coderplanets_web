import type { TUpvoteLayout } from '@/spec'
import { UPVOTE_LAYOUT } from '@/constant'

import { theme } from '@/utils/css'

export const getIconColor = ($active: boolean, count: number): string => {
  if ($active) return theme('thread.articleTitle')
  if (count === 0) return theme('thread.articleDigest')

  return theme('thread.articleDigest')
}

export const getIconSize = (type: TUpvoteLayout): string => {
  switch (type) {
    case UPVOTE_LAYOUT.ARTICLE: {
      return '30px;'
    }

    case UPVOTE_LAYOUT.COMMENT: {
      return '16px;'
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
      return '-5px'
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
    case UPVOTE_LAYOUT.COMMENT: {
      return '6px'
    }

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

    case UPVOTE_LAYOUT.COMMENT: {
      return '7px'
    }

    default: {
      return '8px'
    }
  }
}
