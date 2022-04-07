import type { TMetric, TThread, TFlexRule } from '@/spec'
import { METRIC, THREAD } from '@/constant'

export const getDigestHeight = (metric: TMetric): string => {
  switch (metric) {
    case METRIC.WORKS_ARTICLE: {
      return '220px'
    }

    case METRIC.BLOG_ARTICLE: {
      return '265px'
    }

    default: {
      return '252px'
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

export const getFixStickerAlign = (thread: TThread): TFlexRule => {
  switch (thread) {
    case THREAD.WORKS: {
      return 'justify-end'
    }

    default: {
      return 'justify-center'
    }
  }
}
