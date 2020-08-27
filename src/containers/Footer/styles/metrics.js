import { C11N } from '@/constant'
import { cs } from '@/utils'

export const getPadding = (layout) => {
  return layout === C11N.DIGEST_ROW
    ? cs.media.laptopLPaddingColumnLayout
    : cs.media.laptopLPadding
}

export const holder = 1
