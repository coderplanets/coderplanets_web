/*
 *
 * ArticleViewer
 *
 */

import { FC, memo } from 'react'

import type { TArticle, TBlogRSS } from '@/spec'
import { THREAD } from '@/constant'

import PostViewer from './PostViewer'
import BlogViewer from './BlogViewer'
import WorksViewer from './WorksViewer'

type TProps = {
  article: TArticle
  loading: boolean
  tab: string
  blogRssInfo: TBlogRSS
}

const Viewer: FC<TProps> = ({ article, loading, tab, blogRssInfo }) => {
  const { meta } = article

  switch (meta.thread.toLowerCase()) {
    case THREAD.BLOG: {
      return (
        <BlogViewer
          tab={tab}
          article={article}
          loading={loading}
          blogRssInfo={blogRssInfo}
        />
      )
    }

    case THREAD.WORKS: {
      return <WorksViewer tab={tab} article={article} loading={loading} />
    }

    default: {
      // post, job, etc..
      return <PostViewer article={article} loading={loading} />
    }
  }
}

export default memo(Viewer)
