import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'

export const getDigestHeight = (metric: TMetric): string => {
  switch (metric) {
    case METRIC.WORKS_ARTICLE: {
      return '220px'
    }

    default: {
      return '240px'
    }
  }
}

/**
 * for fixedheader sticker margin-left offset
 */
export const getFixStickerOffset = (metric: TMetric): string => {
  switch (metric) {
    case METRIC.WORKS_ARTICLE: {
      // 和 关于，成员，技术栈等靠左对齐
      return '14px'
    }

    default: {
      return '0'
    }
  }
}

export const holder = 1
