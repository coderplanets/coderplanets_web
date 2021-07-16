import { SIZE } from '@/constant'

const TINY_SIZE = 12
const SMALL_SIZE = 14
const MEDIUM_SIZE = 16
const LARGE_SIZE = 18

const TINY_MARGIN = 4
const TINY_MARGIN_HOVER = 7

const SMALL_MARGIN = 6
const SMALL_MARGIN_HOVER = 10

const MEDIUM_MARGIN = 6
const MEDIUM_MARGIN_HOVER = 10

const LARGE_MARGIN = 6
const LARGE_MARGIN_HOVER = 10

// arrow button should have width
// otherwise the arrow will jump
export const getWidth = (size: string, width = 30): string => {
  switch (size) {
    case SIZE.TINY: {
      return `${width + TINY_SIZE + TINY_MARGIN_HOVER}px`
    }
    case SIZE.SMALL: {
      return `${width + SMALL_SIZE + SMALL_MARGIN_HOVER}px`
    }
    case SIZE.MEDIUM: {
      return `${width + MEDIUM_SIZE + MEDIUM_MARGIN_HOVER}px`
    }
    default: {
      return `${width + LARGE_SIZE + LARGE_MARGIN_HOVER}px`
    }
  }
}

export const getIconSize = (size: string): string => {
  switch (size) {
    case SIZE.TINY: {
      return `${TINY_SIZE}px`
    }
    case SIZE.SMALL: {
      return `${SMALL_SIZE}px`
    }
    case SIZE.MEDIUM: {
      return `${MEDIUM_SIZE}px`
    }
    default: {
      return `${LARGE_SIZE}px`
    }
  }
}

export const getFontSize = (size: string): string => {
  switch (size) {
    case SIZE.TINY: {
      return `${TINY_SIZE}px`
    }
    case SIZE.SMALL: {
      return `${SMALL_SIZE}px`
    }
    case SIZE.MEDIUM: {
      return `${MEDIUM_SIZE}px`
    }
    default: {
      return `${LARGE_SIZE}px`
    }
  }
}

export const getMargin = (size: string, hover = false): string => {
  switch (size) {
    case SIZE.TINY: {
      return !hover ? `${TINY_MARGIN}px` : `${TINY_MARGIN_HOVER}px`
    }
    case SIZE.SMALL: {
      return !hover ? `${SMALL_MARGIN}px` : `${SMALL_MARGIN_HOVER}px`
    }
    case SIZE.MEDIUM: {
      return !hover ? `${MEDIUM_MARGIN}px` : `${MEDIUM_MARGIN_HOVER}px`
    }
    default: {
      return !hover ? `${LARGE_MARGIN}px` : `${LARGE_MARGIN_HOVER}px`
    }
  }
}

export const getSimpleMargin = (size: string, hover = false): string => {
  switch (size) {
    case SIZE.TINY: {
      return !hover ? `${TINY_MARGIN}px` : `${TINY_MARGIN_HOVER}px`
    }
    case SIZE.SMALL: {
      return !hover ? `${SMALL_MARGIN}px` : `${SMALL_MARGIN_HOVER}px`
    }
    case SIZE.MEDIUM: {
      return !hover ? `${MEDIUM_MARGIN}px` : `${MEDIUM_MARGIN_HOVER}px`
    }
    default: {
      return !hover ? `${LARGE_MARGIN}px` : `${LARGE_MARGIN_HOVER}px`
    }
  }
}
