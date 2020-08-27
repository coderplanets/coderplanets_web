import { C11N } from '@/constant'
import { cs } from '@/utils'

export const getMaxWidth = (type) => {
  switch (type) {
    case 'article': {
      return cs.ARTICLE_PAGE_MAX_CONTENT_WIDTH
    }

    default: {
      return cs.MAX_CONTENT_WIDTH
    }
  }
}

export const getPadding = (type, layout) => {
  switch (type) {
    case 'article': {
      return '0 5vw;'
    }

    default: {
      return layout === C11N.DIGEST_ROW
        ? cs.media.laptopLPaddingColumnLayout
        : cs.media.laptopLPadding
    }
  }
}
