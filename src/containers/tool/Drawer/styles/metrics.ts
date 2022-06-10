import { concat, keys, reduce, contains } from 'ramda'
import { TYPE, ARTICLE_THREAD } from '@/constant'

type Options = {
  position?: 'H' | 'M' | 'L'
  direction?: 'bottom' | 'top'
}

const VIEWER_WIDTH = '100%'
const NORMAL_WIDTH = '475px'

export const SWIPE_THRESHOLD = {
  top: {
    L: 100,
    M: 80,
    H: 30,
  },
  bottom: {
    L: 50,
    M: 80,
    H: 100,
  },
}

const VIEWER_TYPES = reduce(
  concat,
  // @ts-ignore
  [TYPE.DRAWER.MAILS_VIEW],
  keys(ARTICLE_THREAD).map((T) => [
    TYPE.DRAWER[`${T}_VIEW`],
    TYPE.DRAWER[`${T}_CREATE`],
    TYPE.DRAWER[`${T}_EDIT`],
  ]),
)

/**
 * viewer-mode is wider, for aritlce viewer, editor staff
 * normal-mode is for settings, user preview staff
 */
export const isViewerMode = (type: string): boolean => {
  return contains(type, VIEWER_TYPES) || type === TYPE.DRAWER.DASHBOARD_DESC
}

export const getDrawerWidth = (type: string): string => {
  return isViewerMode(type) ? VIEWER_WIDTH : NORMAL_WIDTH
}

export const getDrawerMinWidth = (type: string): string => {
  return isViewerMode(type) ? '700px' : '450px'
}

// export for modeline usage
export const L_HEIGHT = '25vh'
const L_TRANSLATE = '300%'
export const H_HEIGHT = '75vh'
const H_TRANSLATE = '35%'
export const M_HEIGHT = '50vh'
const M_TRANSLATE = '100%'

/**
 * dim the drawer panel when scroll offset pass the threshold
 *
 * @param {number} swipeUpY
 * @param {number} swipeDownY
 * @param {object} options
 * @returns
 */
export const getDim = (
  swipeUpY: number,
  swipeDownY: number,
  options: Options,
): string => {
  const threshold = SWIPE_THRESHOLD[options.direction][options.position]

  if (options.direction === 'bottom') {
    return swipeDownY >= threshold ? 'opacity(0.5)' : ''
  }
  if (options.direction === 'top') {
    return swipeUpY >= threshold ? 'opacity(0.5)' : ''
  }
}

/**
 * for drawer on mobile
 * defines drawer contnt height, H,L,M is inspired by vim shortcut
 *
 * @param {object} options
 * @returns
 */
export const getMobileContentHeight = (options: Options): string => {
  /* M -> 50vh, H -> 75vh, L -> 25vh */
  switch (options.position) {
    case 'H': {
      return options.direction === 'bottom' ? H_HEIGHT : L_HEIGHT
    }

    case 'L': {
      return options.direction === 'bottom' ? L_HEIGHT : H_HEIGHT
    }

    default: {
      return M_HEIGHT
    }
  }
}
/**
 * calculate transform value base on media && options
 *
 * @param {boolean} visible
 * @param {boolean} mobile
 * @param {number} swipeUpY
 * @param {number} swipeDownY
 * @param {object} options
 * @returns
 */
export const getTransform = (
  visible: boolean,
  mobile: boolean,
  swipeUpY: number,
  swipeDownY: number,
  fromContentEdge: boolean,
  options: Options,
): string => {
  if (!mobile) {
    /*
     * 滑动的原理是吧 Drawer 从"屏幕"外面移动到视窗窗口内部，但是在宽屏有背自定义景图片这个设计下，这个滑动
     * 效果实际是从 WIDTH.xxxPAGE 边缘开始的，所以当屏幕宽度大于 maxPage 时，不能用默认的外侧滑动偏移，
     * 需要减小这个值才能感觉自然，否则会有跳动感
     *
     */
    const offsetFromEdge = fromContentEdge ? '65px' : '18px'
    return visible ? 'translate(0px, 0px)' : `translate(${offsetFromEdge}, 0px)` // fromRight
  }

  switch (options.direction) {
    case 'top': {
      // return visible ? 'translate(0, 0)' : 'translate(0, -80%)'
      return visible
        ? `translate(0px, ${getTopPosition(swipeUpY, options)})`
        : 'translate(0, -80%)'
    }

    case 'bottom': {
      return visible
        ? `translate(0px, ${getBottomPosition(swipeDownY, options)})`
        : 'translate(0, 100%)'
    }

    default: {
      return visible ? 'translate(0px, 0px)' : 'translate(0%, 100%)'
    }
  }
}

// only for mobile
export const getContentLinearGradient = (
  options: Options,
  bgColor: string,
): string => {
  if (options.direction === 'bottom') {
    return `linear-gradient(0deg,${bgColor} calc(100% - 30px),transparent 30px)`
  }

  return `linear-gradient(180deg, ${bgColor} calc(100% - 30px),transparent 30px)`
}

/**
 * calculate transform height when swipe up
 *
 * @param {number} swipeUpY - swipe up offset
 * @param {object} options
 * @returns string
 * @private
 */
const getTopPosition = (swipeUpY: number, options: Options): string => {
  switch (options.position) {
    case 'L': {
      if (swipeUpY === null) return '0%'
      return `calc(0% - ${swipeUpY}px)`
    }

    case 'M': {
      // return '100%'
      if (swipeUpY === null) return '0%'
      return `calc(0% - ${swipeUpY}px)`
    }

    default: {
      // return '35%'
      if (swipeUpY === null) return '0%'
      return `calc(0% - ${swipeUpY}px)`
    }
  }
}

/**
 * calculate transform height when swipe down
 *
 * @param {number} swipeDownY - swipe down offset
 * @param {object} options
 * @returns string
 * @private
 */
const getBottomPosition = (swipeDownY: number, options: Options): string => {
  switch (options.position) {
    case 'L': {
      if (swipeDownY === null) return L_TRANSLATE
      return `calc(${L_TRANSLATE} + ${swipeDownY}px)`
    }

    case 'M': {
      if (swipeDownY === null) return M_TRANSLATE
      return `calc(${M_TRANSLATE} + ${swipeDownY}px)`
    }

    default: {
      if (swipeDownY === null) return H_TRANSLATE
      return `calc(${H_TRANSLATE} + ${swipeDownY}px)`
    }
  }
}
