/**
 * NOTE:  Li size should always smaller than the avatar size
 */

export const getLiSize = (size) => {
  switch (size) {
    case 'small': {
      return '20px'
    }

    case 'medium': {
      return '25px'
    }

    default: {
      return '25px'
    }
  }
}

export const getAvatarSize = (size) => {
  switch (size) {
    case 'small': {
      return '25px'
    }

    case 'medium': {
      return '30px'
    }

    default: {
      return '30px'
    }
  }
}

export const getTotalCountSize = (total) => {
  if (total < 99) return '13px'
  if (total >= 100 && total <= 999) return '12px'
  return '10px'
}
