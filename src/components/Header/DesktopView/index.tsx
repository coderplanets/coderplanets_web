import { FC, memo } from 'react'

import { METRIC } from '@/constant'

import type { TProps } from '../index'
import CommunityView from './CommunityVIew'
import ArticleView from './ArticleView'
// import ArticleEditorView from './ArticleEditorView'

const DesktopView: FC<TProps> = (props) => {
  const { metric } = props
  switch (metric) {
    case METRIC.ARTICLE: {
      return <ArticleView metric={metric} />
    }
    case METRIC.WORKS_ARTICLE: {
      return <ArticleView metric={metric} />
    }
    // case METRIC.ARTICLE_EDITOR: {
    //   return <ArticleEditorView metric={metric} />
    // }
    default: {
      return <CommunityView {...props} />
    }
  }
}

export default memo(DesktopView)
