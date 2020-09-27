const TINY_SIZE = 12
const SMALL_SIZE = 14
const MEDIUM_SIZE = 16
const LARGE_SIZE = 18

const TINY_MARGIN = 6
const TINY_MARGIN_HOVER = 10

const SMALL_MARGIN = 6
const SMALL_MARGIN_HOVER = 10

const MEDIUM_MARGIN = 6
const MEDIUM_MARGIN_HOVER = 10

const LARGE_MARGIN = 6
const LARGE_MARGIN_HOVER = 10

// arrow button should have width
// otherwise the arrow will jump
export const getWidth = (size, width = 30) => {
  switch (size) {
    case 'tiny': {
      return `${width + TINY_SIZE + TINY_MARGIN_HOVER}px`
    }
    case 'small': {
      return `${width + SMALL_SIZE + SMALL_MARGIN_HOVER}px`
    }
    case 'medium': {
      return `${width + MEDIUM_SIZE + MEDIUM_MARGIN_HOVER}px`
    }
    default: {
      return `${width + LARGE_SIZE + LARGE_MARGIN_HOVER}px`
    }
  }
}

export const getIconSize = (size) => {
  switch (size) {
    case 'tiny': {
      return `${TINY_SIZE}px`
    }
    case 'small': {
      return `${SMALL_SIZE}px`
    }
    case 'medium': {
      return `${MEDIUM_SIZE}px`
    }
    default: {
      return `${LARGE_SIZE}px`
    }
  }
}

export const getFontSize = (size) => {
  switch (size) {
    case 'tiny': {
      return `${TINY_SIZE}px`
    }
    case 'small': {
      return `${SMALL_SIZE}px`
    }
    case 'medium': {
      return `${MEDIUM_SIZE}px`
    }
    default: {
      return `${LARGE_SIZE}px`
    }
  }
}

export const getMargin = (size, hover = false) => {
  switch (size) {
    case 'tiny': {
      return !hover ? `${TINY_MARGIN}px` : `${TINY_MARGIN_HOVER}px`
    }
    case 'small': {
      return !hover ? `${SMALL_MARGIN}px` : `${SMALL_MARGIN_HOVER}px`
    }
    case 'medium': {
      return !hover ? `${MEDIUM_MARGIN}px` : `${MEDIUM_MARGIN_HOVER}px`
    }
    default: {
      return !hover ? `${LARGE_MARGIN}px` : `${LARGE_MARGIN_HOVER}px`
    }
  }
}

export const getSimpleMargin = (size, hover = false) => {
  switch (size) {
    case 'tiny': {
      return !hover ? `${TINY_MARGIN}px` : `${TINY_MARGIN_HOVER}px`
    }
    case 'small': {
      return !hover ? `${SMALL_MARGIN}px` : `${SMALL_MARGIN_HOVER}px`
    }
    case 'medium': {
      return !hover ? `${MEDIUM_MARGIN}px` : `${MEDIUM_MARGIN_HOVER}px`
    }
    default: {
      return !hover ? `${LARGE_MARGIN}px` : `${LARGE_MARGIN_HOVER}px`
    }
  }
}
