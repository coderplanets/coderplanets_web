export const getFontSize = (size: number): string => {
  if (size <= 15) {
    return '10px'
  }
  if (size > 15 && size <= 35) {
    return '13px'
  }

  if (size >= 36 && size < 50) {
    return '14px' // two letters
  }

  return '20px'
}

export const holder = 1
