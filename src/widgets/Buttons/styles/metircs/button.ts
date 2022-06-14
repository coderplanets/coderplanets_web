import { SIZE } from '@/constant'
import { theme } from '@/utils/css'

import type { TTheme } from '@/spec'

export const getColor = (ghost: boolean, disabled: boolean): TTheme => {
  if (ghost) {
    return theme('button.primary')
  }

  if (disabled) {
    return theme('thread.articleDigest')
  }

  return theme('button.fg')
}

export const getBackgroundColor = (
  ghost: boolean,
  disabled: boolean,
  hover = false,
): TTheme => {
  if (ghost) {
    return 'transparent'
  }
  if (disabled) {
    return '#0D363D' // TODO:  same as dimOnIdle background
  }

  return hover ? theme('button.hoverBg') : theme('button.primary')
}

export const getBorderColor = (
  noBorder: boolean,
  disabled: boolean,
  hover = false,
): TTheme => {
  if (noBorder) {
    return 'transparent'
  }
  if (disabled) {
    return '#124b5a' // TODO:  same as dimOnIdle background
  }

  return hover ? theme('button.hoverBg') : theme('button.primary')
}

export const getHeight = (size: string): string => {
  switch (size) {
    case SIZE.TINY: {
      return '18px'
    }

    case SIZE.SMALL: {
      return '24px'
    }

    default: {
      return '32px'
    }
  }
}

export const getPadding = (size: string): string => {
  switch (size) {
    case SIZE.TINY: {
      return '0 4px'
    }

    case SIZE.SMALL: {
      return '0 7px'
    }

    default: {
      return '4px 15px'
    }
  }
}

export const getFontSize = (size: string): string => {
  switch (size) {
    case SIZE.TINY: {
      return '11px'
    }

    case SIZE.SMALL: {
      return '12px'
    }

    default: {
      return '16px'
    }
  }
}
