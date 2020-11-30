import { theme } from '@/utils'
import { SIZE } from '@/constant'

export const getActiveBackground = (dimOnActive) => {
  return dimOnActive ? '#00414F' : theme('button.primary')
}

export const getLabelColor = (checked, dimOnActive) => {
  if (dimOnActive) return theme('thread.articleTitle')

  return checked ? theme('button.fg') : theme('thread.articleTitle')
}

export const getLabelFontsize = (size) => {
  switch (size) {
    case SIZE.SMALL: {
      return '12px'
    }

    default: {
      return '15px'
    }
  }
}

export const getRadioBoxSize = (size) => {
  switch (size) {
    case SIZE.SMALL: {
      return '12px'
    }

    default: {
      return '13px'
    }
  }
}

export const getRadioBoxTop = (size) => {
  switch (size) {
    case SIZE.SMALL: {
      return '4px'
    }

    default: {
      return '6px'
    }
  }
}

export const getRadioBoxLeft = (size) => {
  switch (size) {
    case SIZE.SMALL: {
      return '5px'
    }

    default: {
      return '2px'
    }
  }
}
