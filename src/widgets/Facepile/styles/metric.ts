import { SIZE } from '@/constant'
import type { TAvatarSize } from '../spec'

/**
 * NOTE:  Li size should always smaller than the avatar size
 */

export const getLiSize = (size: TAvatarSize): string => {
  switch (size) {
    case SIZE.SMALL: {
      return '15px'
    }

    case SIZE.MEDIUM: {
      return '20px'
    }

    default: {
      return '22px'
    }
  }
}

export const getAvatarSize = (
  size: string,
  fmt = 'string',
): string | number => {
  switch (size) {
    case SIZE.SMALL: {
      return fmt === 'string' ? '22px' : 22
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
  if (total < 10) return '22px'
  if (total >= 10 && total <= 99) return '28px'
  if (total >= 100 && total <= 999) return '44px'

  return '52px'
}

export const getUlMarginRight = (total: number): string => {
  if (total < 10) return '-8px'
  if (total >= 10 && total <= 99) return '-2px'
  if (total >= 100 && total <= 999) return '10px'

  return '18px'
}
