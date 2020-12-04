import { METRIC } from '@/constant'
import { WIDTH } from '@/utils'

export const getMaxWidth = (metric) => {
  return WIDTH[metric]?.CONTENT || WIDTH.COMMUNITY.CONTENT
}

export const getMarginLeft = (metric) => {
  switch (metric) {
    case METRIC.WORKS: {
      return 0
    }

    default: {
      return WIDTH.COMMUNITY.CONTENT_OFFSET
    }
  }
}
