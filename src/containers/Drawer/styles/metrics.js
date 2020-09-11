import { TYPE } from '@/constant'

export const WIDE_WIDTH = '70%'
export const NARROW_WIDTH = '40%'

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

export const getTransform = (visible, mobile, animation) => {
  if (!mobile) {
    return visible ? 'translate(0px, 0px)' : 'translate(105%, 0px)'
  }

  switch (animation.from) {
    case 'top': {
      return visible ? 'translate(0, 0)' : 'translate(0, -80%)'
    }

    case 'bottom': {
      return visible ? 'translate(0px, 55%)' : 'translate(0, 100%)'
    }

    default: {
      return visible ? 'translate(0px, 0px)' : 'translate(105%, 0px)' // fromRight
    }
  }
}

// only for mobile
export const getContentLinearGradient = (animation, bgColor) => {
  if (animation.from === 'bottom') {
    return `linear-gradient(0deg,${bgColor} calc(100% - 30px),transparent 30px)`
  }

  return `linear-gradient(180deg, ${bgColor} calc(100% - 30px),transparent 30px)`
}
