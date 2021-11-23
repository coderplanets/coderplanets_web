import type { TThread } from '@/spec'
import { THREAD } from '@/constant'

export const getTargetPage = (community: string, thread: TThread): string => {
  return `/publish/${thread}?community=${community}`
}

export const getText = (thread: TThread): string => {
  switch (thread) {
    case THREAD.JOB: {
      return '发布工作'
    }

    case THREAD.RADAR: {
      return '发布讯息'
    }

    case THREAD.BLOG: {
      return '提交博客'
    }

    default: {
      return '发布帖子'
    }
  }
}
