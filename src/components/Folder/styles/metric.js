import { SIZE } from '@/constant'

export const getWidth = (type) => {
  switch (type) {
    case SIZE.LARGE:
      return '240px'

    default:
      return '190px'
  }
}

export const getHeight = (type) => {
  switch (type) {
    case SIZE.LARGE:
      return '180px'

    default:
      return '140px'
  }
}
