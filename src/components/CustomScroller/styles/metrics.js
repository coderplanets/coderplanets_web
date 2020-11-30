import { SIZE } from '@/constant'

const ShadowBgColor = '#022029'

const horizontalShadowBg = (type) => {
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
const verticalShadowBg = (type) => {
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
export const getShadowBackground = (type, direction = 'horizontal') => {
  return direction === 'horizontal'
    ? horizontalShadowBg(type)
    : verticalShadowBg(type)
}

// horizontal getShadowWidth
export const getShadowSize = (type) => {
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
export const getShadowHeight = (type) => {
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

const horizontalScrollbarHeight = (type) => {
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
    // default
    default: {
      return '10px'
    }
  }
}

const verticalScrollbarWidth = (type) => {
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
export const getScrollbarThin = (type, direction) => {
  return direction === 'horizontal'
    ? horizontalScrollbarHeight(type)
    : verticalScrollbarWidth(type)
}
