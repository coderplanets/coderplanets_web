import React from 'react'

import CommunityView from './CommunityVIew'
import ArticleView from './ArticleView'

const renderHeader = (metric) => {
  switch (metric) {
    case 'article': {
      return <ArticleView />
    }
    default: {
      return <CommunityView />
    }
  }
}

const DesktopView = ({ metric }) => {
  return <React.Fragment>{renderHeader(metric)}</React.Fragment>
}

export default DesktopView
