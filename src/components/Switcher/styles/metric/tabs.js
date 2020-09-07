export const getSlipMargin = (size, mobile) => {
  if (mobile) return 10

  switch (size) {
    case 'small': {
      return 0
    }

    default:
      return 32
  }
}

export const getMarginRight = (size, mobile) => {
  if (mobile) return '10px'

  switch (size) {
    case 'small': {
      return '0'
    }

    default:
      return '32px'
  }
}

export const getPadding = (size) => {
  switch (size) {
    case 'small': {
      return '5px 10px'
    }

    default:
      return '12px 10px'
  }
}
