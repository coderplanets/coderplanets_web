/*
 *
 * ArticleDigest
 *
 */

import { Fragment } from 'react'

import usePlatform from '@/hooks/usePlatform'

import DesktopView from './DesktopView'
import MobileView from './MobileView/index'

const ArticleDigest = (props) => {
  const { isMobile } = usePlatform()
  return (
    <Fragment key={String(isMobile)}>
      {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </Fragment>
  )
}

export default ArticleDigest
