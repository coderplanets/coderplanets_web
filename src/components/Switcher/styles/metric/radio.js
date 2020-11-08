import { theme } from '@/utils'

export const getActiveBackground = (dimOnActive) => {
  return dimOnActive ? '#00414F' : theme('button.primary')
}

export const getLabelColor = (checked, dimOnActive) => {
  if (dimOnActive) return theme('thread.articleTitle')

  return checked ? theme('button.fg') : theme('thread.articleTitle')
}

export const getLabelFontsize = (size) => {
  switch (size) {
    case 'small': {
      return '12px'
    }

    default: {
      return '15px'
    }
  }
}

export const getRadioBoxSize = (size) => {
  switch (size) {
    case 'small': {
      return '12px'
    }

    default: {
      return '13px'
    }
  }
}

export const getRadioBoxTop = (size) => {
  switch (size) {
    case 'small': {
      return '3px'
    }

    default: {
      return '5px'
    }
  }
}

export const getRadioBoxLeft = (size) => {
  switch (size) {
    case 'small': {
      return '5px'
    }

    default: {
      return '2px'
    }
  }
}
