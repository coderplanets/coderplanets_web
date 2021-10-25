import { METRIC } from '@/constant'
import type { TMetric } from '@/spec'

export const getStickerJustify = (metric: TMetric): string => {
  switch (metric) {
    case METRIC.WORKS_ARTICLE: {
      return 'flex-start'
    }

    default: {
      return 'center'
    }
  }
}

export const holder = 1
