/**
 * NOTE:  Li size should always smaller than the avatar size
 */

export const getLiSize = (size) => {
  switch (size) {
    case 'small': {
      return '15px'
    }

    case 'medium': {
      return '20px'
    }

    default: {
      return '24px'
    }
  }
}

export const getAvatarSize = (size, fmt = 'string') => {
  switch (size) {
    case 'small': {
      return fmt === 'string' ? '25px' : 25
    }

    case 'medium': {
      return fmt === 'string' ? '30px' : 30
    }

    default: {
      return fmt === 'string' ? '30px' : 30
    }
  }
}

export const getTotalCountSize = (total) => {
  if (total < 99) return '13px'
  if (total >= 100 && total <= 999) return '12px'
  return '10px'
}

export const getMoreTextWidth = (total) => {
  if (total < 10) return '24px'
  if (total >= 10 && total <= 99) return '32px'
  if (total >= 100 && total <= 999) return '44px'

  return '52px'
}

export const getUlMarginRight = (total) => {
  if (total < 10) return '-8px'
  if (total >= 10 && total <= 99) return '-2px'
  if (total >= 100 && total <= 999) return '10px'

  return '18px'
}
