import { SIZE } from '@/constant'

const ShadowBgColor = '#ededed' // to-theme

const horizontalShadowBg = (type: string): string => {
  switch (type) {
    case SIZE.SMALL: {
      return `-webkit-radial-gradient(
        0% 50%,
        100% 100%,
        ${ShadowBgColor} 0%,
        transparent 100%
      )`
    }

    // large
    default: {
      return `
      -webkit-radial-gradient(
        0% 50%,
        100% 60%,
        ${ShadowBgColor} 0%,
        transparent 100%
      )
       `
    }
  }
}
const verticalShadowBg = (type: string): string => {
  switch (type) {
    case SIZE.SMALL: {
      return `
      -webkit-radial-gradient(50% 0%, 50% 18px, ${ShadowBgColor} 0%, transparent 100%);
      `
    }

    // large
    default: {
      return `
      -webkit-radial-gradient(50% 0%, 50% 18px, ${ShadowBgColor} 0%, transparent 100%);
       `
    }
  }
}

// horizontal getShadowBackground
export const getShadowBackground = (
  type: string,
  direction = 'horizontal',
): string => {
  return direction === 'horizontal'
    ? horizontalShadowBg(type)
    : verticalShadowBg(type)
}

// horizontal getShadowWidth
export const getShadowSize = (type: string): string => {
  switch (type) {
    case SIZE.SMALL: {
      return '30px'
    }
    case SIZE.MEDIUM: {
      return '50px;'
    }
    // large
    default: {
      return '50px'
    }
  }
}

// vertical getShadowWidth
export const getShadowHeight = (type: string): string => {
  switch (type) {
    case SIZE.SMALL: {
      return '20px'
    }
    case SIZE.MEDIUM: {
      return '40px;'
    }
    // large
    default: {
      return '20px'
    }
  }
}

const horizontalScrollbarHeight = (type: string): string => {
  switch (type) {
    case SIZE.TINY: {
      return '3px'
    }
    case SIZE.SMALL: {
      return '5px'
    }
    case SIZE.MEDIUM: {
      return '8px;'
    }
    case SIZE.LARGE: {
      return '12px;'
    }
    // default
    default: {
      return '10px'
    }
  }
}

const verticalScrollbarWidth = (type: string): string => {
  switch (type) {
    case SIZE.TINY: {
      return '6px'
    }
    case SIZE.SMALL: {
      return '7px'
    }
    case 'none': {
      return '0'
    }
    // default
    default: {
      return '10px'
    }
  }
}

// horizontal ScrollbarHeight
// see https://kingsora.github.io/OverlayScrollbars/#!documentation/classnames
export const getScrollbarThin = (
  type: string,
  direction = 'horizontal',
): string => {
  return direction === 'horizontal'
    ? horizontalScrollbarHeight(type)
    : verticalScrollbarWidth(type)
}
