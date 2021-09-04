/*
 *
 * ArticleViewer
 *
 */

import { FC, memo } from 'react'

import type { TArticle } from '@/spec'
import { THREAD } from '@/constant'

import PostViewer from './PostViewer'
import WorksViewer from './WorksViewer'

type TProps = {
  article: TArticle
  loading: boolean
}

const Viewer: FC<TProps> = ({ article, loading }) => {
  const { meta } = article

  switch (meta.thread) {
    case THREAD.WORKS: {
      return <WorksViewer article={article} loading={loading} />
    }

    default: {
      return <PostViewer article={article} loading={loading} />
    }
  }
}

export default memo(Viewer)
