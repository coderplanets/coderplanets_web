import { C11N, METRIC } from '@/constant'
import { css, WIDTH } from '@/utils'

export const getPadding = (layout) => {
  return layout === C11N.DIGEST_ROW
    ? css.media.laptopLPaddingColumnLayout
    : css.media.laptopLPadding
}

export const getWidth = (metric) => {
  switch (metric) {
    case METRIC.WORKS: {
      return WIDTH.WORKS.CONTENT
    }

    default: {
      return WIDTH.COMMUNITY.CONTENT
    }
  }
}
