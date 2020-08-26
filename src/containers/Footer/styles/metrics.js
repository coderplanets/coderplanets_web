import { cs } from '@/utils'

export const holder = 1

export const getPadding = (layout) => {
  return layout === 'left-right'
    ? cs.media.laptopLPaddingColumnLayout
    : cs.media.laptopLPadding
}
