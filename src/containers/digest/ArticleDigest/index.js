/*
 *
 * ArticleDigest
 *
 */

import React from 'react'
import T from 'prop-types'

import { useMedia } from '@/hooks'

import DesktopView from './DesktopView/index'
import MobileView from './MobileView/index'

const ArticleDigestContainer = (props) => {
  const { mobile } = useMedia()

  return (
    <React.Fragment>
      {!mobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </React.Fragment>
  )
}

ArticleDigestContainer.propTypes = {
  articleDigest: T.object.isRequired,
  showStar: T.bool,
  showWordCount: T.bool,
  showLastSync: T.bool,
}

ArticleDigestContainer.defaultProps = {
  showStar: true,
  showWordCount: true,
  showLastSync: false,
}

export default ArticleDigestContainer
