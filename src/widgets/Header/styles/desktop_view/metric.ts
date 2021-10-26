import { METRIC } from '@/constant'
import type { TMetric } from '@/spec'

export const getStickerJustify = (metric: TMetric): string => {
  switch (metric) {
    case METRIC.WORKS_ARTICLE: {
      return 'flex-end'
    }

    default: {
      return 'center'
    }
  }
}

export const holder = 1
