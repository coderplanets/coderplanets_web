import { FC, memo } from 'react'
import type { TArticle, TMetric, TThread } from '@/spec'

import { THREAD, METRIC } from '@/constant'

import PostLayout from './PostLayout'
import BlogLayout from './BlogLayout'
import WorksLayout from './WorksLayout'

type TProps = {
  article: TArticle
  thread: TThread
  metric?: TMetric
}

const Layout: FC<TProps> = ({ article, thread, metric = METRIC.ARTICLE }) => {
  switch (thread) {
    case THREAD.WORKS: {
      return <WorksLayout article={article} metric={metric} />
    }

    case THREAD.BLOG: {
      return <BlogLayout article={article} metric={metric} />
    }

    default: {
      return <PostLayout article={article} />
    }
  }
}

export default memo(Layout)
