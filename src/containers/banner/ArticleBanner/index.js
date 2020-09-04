/*
 *
 * ArticleBanner
 *
 */

import React from 'react'
import T from 'prop-types'

import { useMedia } from '@/hooks'

import DesktopView from './DesktopView'
import MobileView from './MobileView/index'

const ArticleBannerContainer = (props) => {
  const { mobile } = useMedia()

  return (
    <React.Fragment>
      {!mobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </React.Fragment>
  )
}

ArticleBannerContainer.propTypes = {
  articleBanner: T.object.isRequired,
  showStar: T.bool,
  showWordCount: T.bool,
  showLastSync: T.bool,
}

ArticleBannerContainer.defaultProps = {
  showStar: true,
  showWordCount: true,
  showLastSync: false,
}

export default ArticleBannerContainer
