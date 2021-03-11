import { SIZE } from '@/constant'

export const getSlipMargin = (size: string, mobileView: boolean): number => {
  if (mobileView) return 5

  switch (size) {
    case SIZE.SMALL: {
      return 0
    }

    default:
      return 32
  }
}

export const getMarginRight = (
  size: string,
  mobileView: boolean,
  cardView: boolean,
): string => {
  if (mobileView) return '5px'
  if (cardView) return '0'

  switch (size) {
    case SIZE.SMALL: {
      return '0'
    }

    default:
      return '32px'
  }
}

export const getPadding = (
  size: string,
  cardView: boolean,
  mobileView: boolean,
  wrapMode: boolean,
  modelineView: boolean,
): string => {
  if (cardView) return '2px'

  if (modelineView) {
    return '6px 10px'
  }

  if (mobileView) {
    if (wrapMode) {
      return '5px'
    }
    return '10px'
  }

  switch (size) {
    case SIZE.SMALL: {
      return '5px 10px'
    }

    default:
      return '12px 10px'
  }
}

export const getMarginBottom = (
  cardView: boolean,
  wrapMode: boolean,
): string => {
  if (cardView) return '8px'
  if (wrapMode) return '4px'

  return '0'
}
