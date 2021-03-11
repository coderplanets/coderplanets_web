import { SIZE } from '@/constant'

export const getWidth = (type: string): string => {
  switch (type) {
    case SIZE.LARGE:
      return '240px'

    default:
      return '190px'
  }
}

export const getHeight = (type: string): string => {
  switch (type) {
    case SIZE.LARGE:
      return '180px'

    default:
      return '140px'
  }
}
