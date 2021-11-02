import { FC, memo } from 'react'

import type { TArticleThread } from '@/spec'
import { ARTICLE_THREAD } from '@/constant'

import PostRules from './PostRules'
import JobRules from './JobRules'

type TProps = {
  thread: TArticleThread
}

const PublishRules: FC<TProps> = ({ thread }) => {
  switch (thread) {
    case ARTICLE_THREAD.JOB: {
      return <JobRules />
    }

    default: {
      return <PostRules />
    }
  }
}

export default memo(PublishRules)
