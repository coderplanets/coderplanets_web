import { FC, memo } from 'react'

import { METRIC } from '@/constant'

import type { TProps } from '../index'
// import CommunityLayout from './CommunityLayout'
import ArticleLayout from './ArticleLayout'
// import WorksLayout from './WorksLayout'
import GeneralLayout from './GeneralLayout'
// import ArticleEditorView from './ArticleEditorView'

const DesktopView: FC<TProps> = (props) => {
  const { metric } = props
  switch (metric) {
    case METRIC.ARTICLE:
    case METRIC.BLOG_ARTICLE: {
      return <ArticleLayout {...props} />
    }
    case METRIC.WORKS_ARTICLE: {
      return <ArticleLayout {...props} />
    }
    case METRIC.COMMUNITY: {
      return null // <CommunityLayout {...props} />
    }
    default: {
      return <GeneralLayout {...props} />
    }
  }
}

export default memo(DesktopView)
