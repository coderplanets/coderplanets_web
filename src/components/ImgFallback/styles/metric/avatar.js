export const getFontSize = (size) => {
  if (size <= 15) {
    return '10px'
  }
  if (size > 15 && size <= 32) {
    return '14px'
  }

  if (size >= 36 && size < 50) {
    return '14px' // two letters
  }

  return '20px'
}

export const holder = 1
