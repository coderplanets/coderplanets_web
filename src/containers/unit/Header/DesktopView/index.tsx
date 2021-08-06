import { FC, memo } from 'react'

import type { TMetric } from '@/spec'
// import { METRIC } from '@/constant'

import CommunityView from './CommunityView'
// import ArticleView from './ArticleView'
// import ArticleEditorView from './ArticleEditorView'

type TProps = {
  metric: TMetric
}

const DesktopView: FC<TProps> = ({ metric }) => {
  switch (metric) {
    // case METRIC.ARTICLE: {
    //   return <ArticleView metric={metric} />
    // }
    // case METRIC.WORKS_ARTICLE: {
    //   return <ArticleView metric={metric} />
    // }
    // case METRIC.ARTICLE_EDITOR: {
    //   return <ArticleEditorView metric={metric} />
    // }
    default: {
      return <CommunityView metric={metric} />
    }
  }
}

export default memo(DesktopView)
