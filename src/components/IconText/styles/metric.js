export const getIconSize = (size) => {
  switch (size) {
    case 'large': {
      return '13px'
    }
    case 'tiny': {
      return '11px'
    }
    case 'small': {
      return '12px'
    }
    default: {
      return '15px'
    }
  }
}

export const getTextSize = (size) => {
  switch (size) {
    case 'large': {
      return '15px'
    }
    case 'tiny': {
      return '11px'
    }
    default: {
      return '12px'
    }
  }
}

export const getMargin = (size) => {
  switch (size) {
    case 'large': {
      return '8px'
    }
    case 'tiny': {
      return '2px'
    }
    default: {
      return '4px'
    }
  }
}
