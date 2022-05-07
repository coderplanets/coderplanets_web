import { SIZE } from '@/constant'

export const getSlipMargin = (
  size: string,
  mobileView: boolean,
  holyGrailView = false,
): number => {
  if (mobileView) return 5
  if (holyGrailView) return 15

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
  holyGrailView: boolean,
): string => {
  if (mobileView) return '5px'
  if (holyGrailView) return '15px'

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
  holyGrailView: boolean,
  mobileView: boolean,
  wrapMode: boolean,
  modelineView: boolean,
): string => {
  if (holyGrailView) return '12px 10px'

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
      return '5px 14px'
    }

    default:
      return '12px 10px'
  }
}

export const getMarginBottom = (
  holyGrailView: boolean,
  wrapMode: boolean,
): string => {
  if (holyGrailView) return '0'
  if (wrapMode) return '4px'

  return '0'
}
