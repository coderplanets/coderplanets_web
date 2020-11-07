import React from 'react'

import { METRIC } from '@/constant'

import CommunityView from './CommunityVIew'
import ArticleView from './ArticleView'

const renderHeader = (metric) => {
  switch (metric) {
    case METRIC.ARTICLE: {
      return <ArticleView />
    }
    default: {
      return <CommunityView metric={metric} />
    }
  }
}

const DesktopView = ({ metric }) => {
  return <React.Fragment>{renderHeader(metric)}</React.Fragment>
}

export default DesktopView
