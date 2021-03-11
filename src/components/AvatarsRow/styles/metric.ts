import { SIZE } from '@/constant'
/**
 * NOTE:  Li size should always smaller than the avatar size
 */

export const getLiSize = (size: string): string => {
  switch (size) {
    case SIZE.SMALL: {
      return '15px'
    }

    case SIZE.MEDIUM: {
      return '20px'
    }

    default: {
      return '24px'
    }
  }
}

export const getAvatarSize = (
  size: string,
  fmt = 'string',
): string | number => {
  switch (size) {
    case SIZE.SMALL: {
      return fmt === 'string' ? '24px' : 24
    }

    case SIZE.MEDIUM: {
      return fmt === 'string' ? '30px' : 30
    }

    default: {
      return fmt === 'string' ? '30px' : 30
    }
  }
}

export const getTotalCountSize = (total: number): string => {
  if (total < 99) return '13px'
  if (total >= 100 && total <= 999) return '12px'
  return '10px'
}

export const getMoreTextWidth = (total: number): string => {
  if (total < 10) return '23px'
  if (total >= 10 && total <= 99) return '32px'
  if (total >= 100 && total <= 999) return '44px'

  return '52px'
}

export const getUlMarginRight = (total: number): string => {
  if (total < 10) return '-8px'
  if (total >= 10 && total <= 99) return '-2px'
  if (total >= 100 && total <= 999) return '10px'

  return '18px'
}
