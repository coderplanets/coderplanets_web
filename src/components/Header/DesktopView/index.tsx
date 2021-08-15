import { FC, memo } from 'react'

import { METRIC } from '@/constant'

import type { TProps } from '../index'
import CommunityLayout from './CommunityLayout'
import ArticleLayout from './ArticleLayout'
import NormalLayout from './NormalLayout'
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
    case METRIC.COMMUNITY: {
      return <CommunityLayout {...props} />
    }
    default: {
      return <NormalLayout {...props} />
    }
  }
}

export default memo(DesktopView)
