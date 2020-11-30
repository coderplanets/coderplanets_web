import { SIZE } from '@/constant'
import { theme } from '@/utils'

export const getColor = (ghost, disabled) => {
  if (ghost) {
    return theme('button.primary')
  }
  if (disabled) {
    return '#83a7bd' // TODO:  same as dimOnIdle background
  }

  return theme('button.fg')
}

export const getBackgroundColor = (ghost, disabled, hover = false) => {
  if (ghost) {
    return 'transparent'
  }
  if (disabled) {
    return '#124b5a' // TODO:  same as dimOnIdle background
  }

  return hover ? theme('button.hoverBg') : theme('button.primary')
}

export const getBorderColor = (noBorder, disabled, hover = false) => {
  if (noBorder) {
    return 'transparent'
  }
  if (disabled) {
    return '#124b5a' // TODO:  same as dimOnIdle background
  }

  return hover ? theme('button.hoverBg') : theme('button.primary')
}

export const getHeight = (size) => {
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

export const getPadding = (size) => {
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

export const getFontSize = (size) => {
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
