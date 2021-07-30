import { Fragment } from 'react'

import { isMobile } from 'react-device-detect'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

const MainEntries = (props) => {
  return (
    <Fragment>
      {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </Fragment>
  )
}

export default MainEntries
