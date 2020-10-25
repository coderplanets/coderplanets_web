import { C11N } from '@/constant'
import { css } from '@/utils'

export const getPadding = (layout) => {
  return layout === C11N.DIGEST_ROW
    ? css.media.laptopLPaddingColumnLayout
    : css.media.laptopLPadding
}

export const holder = 1
