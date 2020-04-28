export const slipmargin = size => {
  switch (size) {
    case 'small': {
      return 0
    }

    default:
      return 32
  }
}

export const getMarginRight = size => {
  switch (size) {
    case 'small': {
      return '0'
    }

    default:
      return '32px'
  }
}

export const getPadding = size => {
  switch (size) {
    case 'small': {
      return '5px 10px'
    }

    default:
      return '12px 10px'
  }
}
