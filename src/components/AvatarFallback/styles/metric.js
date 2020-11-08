export const getFontSize = (width) => {
  if (width <= 15) {
    return '10px'
  }
  if (width > 15 && width <= 32) {
    return '14px'
  }

  if (width >= 38 && width < 50) {
    return '14px' // two letters
  }

  return '20px'
}

export const holder = 1
