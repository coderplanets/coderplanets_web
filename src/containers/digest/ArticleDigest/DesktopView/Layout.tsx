import { FC, memo } from 'react'
import type { TArticle, TMetric, TThread } from '@/spec'

import { THREAD, METRIC } from '@/constant'

import PostLayout from './PostLayout'
import JobLayout from './JobLayout'
import BlogLayout from './BlogLayout'
import WorksLayout from './WorksLayout'

type TProps = {
  article: TArticle
  thread: TThread
  metric?: TMetric
  tab: string
}

const Layout: FC<TProps> = ({
  article,
  thread,
  metric = METRIC.ARTICLE,
  tab,
}) => {
  switch (thread) {
    case THREAD.WORKS: {
      return <WorksLayout article={article} metric={metric} tab={tab} />
    }

    case THREAD.JOB: {
      return <JobLayout article={article} metric={metric} />
    }

    case THREAD.BLOG: {
      return <BlogLayout article={article} metric={metric} tab={tab} />
    }

    default: {
      return <PostLayout article={article} />
    }
  }
}

export default memo(Layout)
