/*
 *
 * ArticleDigest
 *
 */

import { Fragment } from 'react'
import { isMobile } from 'react-device-detect'

import DesktopView from './DesktopView'
import MobileView from './MobileView/index'

const ArticleDigest = (props) => {
  return (
    <Fragment key={String(isMobile)}>
      {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </Fragment>
  )
}

export default ArticleDigest
