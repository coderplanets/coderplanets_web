/*
 *
 * ArticleDigest
 *
 */

import React from 'react'

import { useDevice } from '@/hooks'

import DesktopView from './DesktopView/index'
import MobileView from './MobileView/index'

const ArticleDigest = (props) => {
  const { isMobile } = useDevice()

  return (
    <React.Fragment key={isMobile}>
      {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </React.Fragment>
  )
}

export default ArticleDigest
