import { SIZE } from '@/constant'

export const getWidth = (type: string): string => {
  switch (type) {
    case SIZE.LARGE:
      return '240px'

    default:
      return '75px'
  }
}

export const getHeight = (type: string): string => {
  switch (type) {
    case SIZE.LARGE:
      return '180px'

    default:
      return '100px'
  }
}
