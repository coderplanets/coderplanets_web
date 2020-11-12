import { theme } from '@/utils'

// see details in https://9elements.github.io/fancy-border-radius/
export const getBorderRadius = (anchors) => {
  const { anchorHEnter, anchorMEnter } = anchors

  if (anchorHEnter) return '0% 100% 49% 51% / 57% 0% 100% 43%'
  if (anchorMEnter) return '100% 0% 49% 51% / 87% 87% 13% 13%'

  return '100% 0% 49% 51% / 100% 100% 0% 0%'
}

export const getBannerHeight = (anchors) => {
  const { anchorMEnter, anchorLEnter } = anchors
  if (!anchorLEnter) return '20vh'
  if (!anchorMEnter) return '30vh'

  return '40vh'
}

export const getBackground = (anchors) => {
  const { anchorMEnter } = anchors
  if (!anchorMEnter) return 'transparent'

  return theme('banner.linearGradient')
}
