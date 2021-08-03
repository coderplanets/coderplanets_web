/*
 *
 * Footer
 *
 */

import { Fragment } from 'react'

import usePlatform from '@/hooks/usePlatform'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

const FooterContainer = (props) => {
  const { isMobile } = usePlatform()
  return (
    <Fragment>
      {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </Fragment>
  )
}

export default FooterContainer
