import { C11N } from '@/constant'
import { css } from '@/utils'

export const getMaxWidth = (type) => {
  switch (type) {
    case 'article': {
      return css.ARTICLE_PAGE_MAX_WIDTH
    }

    default: {
      return css.MAX_CONTENT_WIDTH
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
        ? css.media.laptopLPaddingColumnLayout
        : css.media.laptopLPadding
    }
  }
}
