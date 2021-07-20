import { FC, memo } from 'react'

import { METRIC } from '@/constant'

import CommunityView from './CommunityVIew'
import ArticleView from './ArticleView'
import ArticleEditorView from './ArticleEditorView'

type TProps = {
  metric: string
}

const DesktopView: FC<TProps> = ({ metric }) => {
  switch (metric) {
    case METRIC.ARTICLE: {
      return <ArticleView metric={metric} />
    }
    case METRIC.WORKS_ARTICLE: {
      return <ArticleView metric={metric} />
    }
    case METRIC.ARTICLE_EDITOR: {
      return <ArticleEditorView metric={metric} />
    }
    default: {
      return <CommunityView metric={metric} />
    }
  }
}

export default memo(DesktopView)
