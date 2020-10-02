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
    case 'tiny': {
      return '18px'
    }

    case 'small': {
      return '24px'
    }

    default: {
      return '32px'
    }
  }
}

export const getPadding = (size) => {
  switch (size) {
    case 'tiny': {
      return '1px 5px'
    }

    case 'small': {
      return '0 7px'
    }

    default: {
      return '4px 15px'
    }
  }
}

export const getFontSize = (size) => {
  switch (size) {
    case 'tiny': {
      return '11px'
    }

    case 'small': {
      return '14px'
    }

    default: {
      return '16px'
    }
  }
}
