import { TYPE } from '@/constant'

export const WIDE_WIDTH = '70%'
export const NARROW_WIDTH = '40%'

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

export const WIDE_CASE = [
  // post
  TYPE.DRAWER.POST_VIEW,
  TYPE.DRAWER.POST_CREATE,
  TYPE.DRAWER.POST_EDIT,
  // job
  TYPE.DRAWER.JOB_VIEW,
  TYPE.DRAWER.JOB_CREATE,
  TYPE.DRAWER.JOB_EDIT,
  // repo
  TYPE.DRAWER.REPO_VIEW,
  TYPE.DRAWER.REPO_CREATE,
  // video
  TYPE.DRAWER.VIDEO_VIEW,
  // mails
  TYPE.DRAWER.MAILS_VIEW,
]

/**
 * for drawer on mobile
 * defines drawer contnt height, H,L,M is inspired by vim shortcut
 *
 * @param {object} options
 * @returns
 */
export const getMobileContentHeight = (options) => {
  /* M -> 50vh, H -> 75vh, L -> 20vh */
  switch (options.position) {
    case 'H': {
      return options.direction === 'bottom' ? '75vh' : '20vh'
    }

    case 'L': {
      return options.direction === 'bottom' ? '20vh' : '75vh'
    }

    default: {
      return '50vh'
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
  visible,
  mobile,
  swipeUpY,
  swipeDownY,
  options,
) => {
  if (!mobile) {
    return visible ? 'translate(0px, 0px)' : 'translate(105%, 0px)' // fromRight
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
export const getContentLinearGradient = (options, bgColor) => {
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
const getTopPosition = (swipeUpY, options) => {
  switch (options.position) {
    case 'L': {
      // return '400%'
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
const getBottomPosition = (swipeDownY, options) => {
  switch (options.position) {
    case 'L': {
      // return '400%'
      if (swipeDownY === null) return '400%'
      return `calc(400% + ${swipeDownY}px)`
    }

    case 'M': {
      // return '100%'
      if (swipeDownY === null) return '100%'
      return `calc(100% + ${swipeDownY}px)`
    }

    default: {
      // return '35%'
      if (swipeDownY === null) return '35%'
      return `calc(35% + ${swipeDownY}px)`
    }
  }
}
