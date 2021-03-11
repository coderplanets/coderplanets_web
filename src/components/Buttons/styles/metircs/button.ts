import { SIZE } from '@/constant'
import { theme } from '@/utils'

import { TTheme } from '@/types'

export const getColor = (ghost: boolean, disabled: boolean): TTheme => {
  if (ghost) {
    return theme('button.primary')
  }
  if (disabled) {
    return '#83a7bd' // TODO:  same as dimOnIdle background
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
    return '#124b5a' // TODO:  same as dimOnIdle background
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
      return '1px 5px'
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
      return '14px'
    }

    default: {
      return '16px'
    }
  }
}
