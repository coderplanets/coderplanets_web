import { theme } from '@/utils/css'
import { SIZE } from '@/constant'

import { TTheme } from '@/spec'

export const getActiveBackground = (dimOnActive: boolean): TTheme => {
  return dimOnActive ? theme('border') : theme('button.primary')
}

export const getLabelColor = (
  checked: boolean,
  dimOnActive: boolean,
): TTheme => {
  if (dimOnActive) return theme('thread.articleTitle')

  return checked ? theme('button.fg') : theme('thread.articleTitle')
}

export const getLabelFontsize = (size: string): string => {
  switch (size) {
    case SIZE.SMALL: {
      return '12px'
    }

    default: {
      return '15px'
    }
  }
}

export const getRadioBoxSize = (size: string): string => {
  switch (size) {
    case SIZE.SMALL: {
      return '12px'
    }

    default: {
      return '13px'
    }
  }
}

export const getRadioBoxTop = (size: string): string => {
  switch (size) {
    case SIZE.SMALL: {
      return '4px'
    }

    default: {
      return '6px'
    }
  }
}

export const getRadioBoxLeft = (size: string): string => {
  switch (size) {
    case SIZE.SMALL: {
      return '5px'
    }

    default: {
      return '2px'
    }
  }
}
