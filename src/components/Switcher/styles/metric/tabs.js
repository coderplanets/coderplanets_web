export const getSlipMargin = (size, mobileView) => {
  if (mobileView) return 5

  switch (size) {
    case 'small': {
      return 0
    }

    default:
      return 32
  }
}

export const getMarginRight = (size, mobileView, cardView) => {
  if (mobileView) return '5px'
  if (cardView) return '0'

  switch (size) {
    case 'small': {
      return '0'
    }

    default:
      return '32px'
  }
}

export const getPadding = (size, cardView, mobileView) => {
  if (cardView) return '2px'
  if (mobileView) return '10px'

  switch (size) {
    case 'small': {
      return '5px 10px'
    }

    default:
      return '12px 10px'
  }
}
