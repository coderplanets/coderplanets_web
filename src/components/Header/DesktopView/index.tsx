import { FC, memo } from 'react'

import { METRIC } from '@/constant'

import type { TProps } from '../index'
import CommunityView from './CommunityView'
import ArticleView from './ArticleView'
import WorksView from './WorksView'
// import ArticleEditorView from './ArticleEditorView'

const DesktopView: FC<TProps> = (props) => {
  const { metric } = props
  switch (metric) {
    case METRIC.ARTICLE: {
      return <ArticleView {...props} />
    }
    case METRIC.WORKS_ARTICLE: {
      return <ArticleView {...props} />
    }
    case METRIC.WORKS: {
      return <WorksView {...props} />
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
