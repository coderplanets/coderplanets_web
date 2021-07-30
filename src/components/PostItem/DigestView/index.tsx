import { Fragment } from 'react'

import { isMobile } from 'react-device-detect'

import DesktopView from './DesktopView/index'
import MobileView from './MobileView/index'

const DigestView = (props) => {
  return (
    <Fragment>
      {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </Fragment>
  )
}

export default DigestView
