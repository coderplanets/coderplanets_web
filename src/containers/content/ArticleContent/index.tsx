/*
 *
 * PostContent
 *
 */

import { Fragment } from 'react'

import { useDevice } from '@/hooks'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

const ArticleContent = (props) => {
  const { isMobile } = useDevice()

  return (
    <Fragment>
      {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </Fragment>
  )
}

export default ArticleContent
