import { C11N, METRIC } from '@/constant'
import { css, WIDTH } from '@/utils'

export const getPadding = (layout) => {
  return layout === C11N.DIGEST_ROW
    ? css.media.laptopLPaddingColumnLayout
    : css.media.laptopLPadding
}

export const getMaxWidth = (metric) => {
  return WIDTH[metric]?.CONTENT || WIDTH.COMMUNITY.CONTENT
}

export const getMarginLeft = (metric) => {
  switch (metric) {
    case METRIC.WORKS: {
      return 0
    }

    default: {
      return WIDTH.COMMUNITY.CONTENT_OFFSET
    }
  }
}
