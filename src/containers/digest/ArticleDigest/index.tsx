/*
 *
 * ArticleDigest
 *
 */

import { Fragment } from 'react'

import { useDevice } from '@/hooks'

import DesktopView from './DesktopView/index'
import MobileView from './MobileView/index'

const ArticleDigest = (props) => {
  const { isMobile } = useDevice()

  return (
    <Fragment key={String(isMobile)}>
      {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </Fragment>
  )
}

export default ArticleDigest
