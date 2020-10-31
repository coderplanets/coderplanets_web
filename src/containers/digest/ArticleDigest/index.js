/*
 *
 * ArticleDigest
 *
 */

import React from 'react'

import { useMedia } from '@/hooks'

import DesktopView from './DesktopView/index'
import MobileView from './MobileView/index'

const ArticleDigest = (props) => {
  const { mobile } = useMedia()

  return (
    <React.Fragment>
      {mobile ? <MobileView {...props} /> : <DesktopView {...props} />}
    </React.Fragment>
  )
}

export default React.memo(ArticleDigest)
