import { Fragment, memo } from 'react'
import { isMobile } from 'react-device-detect'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

const Content = (props) => {
  return (
    <Fragment>
      {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </Fragment>
  )
}

export default memo(Content)
