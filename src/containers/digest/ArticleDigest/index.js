/*
 *
 * ArticleDigest
 *
 */

import React from 'react'

import { isMobile } from '@/utils'

import DesktopView from './DesktopView/index'
import MobileView from './MobileView/index'

const ArticleDigest = (props) => {
  return (
    <React.Fragment>
      {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </React.Fragment>
  )
}

export default React.memo(ArticleDigest)
