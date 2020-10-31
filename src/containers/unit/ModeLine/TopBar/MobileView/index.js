import React from 'react'

import { METRIC } from '@/constant'

import ArticleBar from './ArticleBar'
import CommunityBar from './CommunityBar'

const MobileView = ({ metric, ...restProps }) => {
  return (
    <React.Fragment>
      {metric === METRIC.ARTICLE ? (
        <ArticleBar {...restProps} />
      ) : (
        <CommunityBar {...restProps} />
      )}
    </React.Fragment>
  )
}

export default React.memo(MobileView)
