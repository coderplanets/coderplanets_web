import { FC, memo } from 'react'

import { METRIC } from '@/constant'

import type { TProps } from '../index'
import CommunityLayout from './CommunityLayout'
import ArticleLayout from './ArticleLayout'
import WorksLayout from './WorksLayout'
// import ArticleEditorView from './ArticleEditorView'

const DesktopView: FC<TProps> = (props) => {
  const { metric } = props
  switch (metric) {
    case METRIC.ARTICLE: {
      return <ArticleLayout {...props} />
    }
    case METRIC.WORKS_ARTICLE: {
      return <ArticleLayout {...props} />
    }
    case METRIC.WORKS: {
      return <WorksLayout {...props} />
    }
    // case METRIC.ARTICLE_EDITOR: {
    //   return <ArticleEditorView metric={metric} />
    // }
    default: {
      return <CommunityLayout {...props} />
    }
  }
}

export default memo(DesktopView)
