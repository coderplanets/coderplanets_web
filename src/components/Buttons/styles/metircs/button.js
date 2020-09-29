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
