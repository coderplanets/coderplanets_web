import { FC, memo } from 'react'
import type { TArticle, TThread } from '@/spec'

import { THREAD } from '@/constant'

import PostLayout from './PostLayout'
// import JobLayout from './JobLayout'
// import BlogLayout from './BlogLayout'
import WorksLayout from './WorksLayout'

type TProps = {
  article: TArticle
  thread: TThread
  tab: string
}

const Layout: FC<TProps> = ({ article, thread, tab }) => {
  switch (thread) {
    case THREAD.WORKS: {
      return <WorksLayout article={article} tab={tab} />
    }

    // case THREAD.JOB: {
    //   return <JobLayout article={article} metric={metric} />
    // }

    // case THREAD.BLOG: {
    //   return <BlogLayout article={article} metric={metric} tab={tab} />
    // }

    default: {
      return <PostLayout article={article} />
    }
  }
}

export default memo(Layout)
