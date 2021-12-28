/*
 *
 * Footer
 *
 */

import { Fragment } from 'react'
import { isMobile } from 'react-device-detect'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

const FooterContainer = (props) => {
  return (
    <Fragment>
      {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </Fragment>
  )
}

export default FooterContainer
