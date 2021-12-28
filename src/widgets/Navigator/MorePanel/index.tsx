import { Fragment, memo } from 'react'
import { isMobile } from 'react-device-detect'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

const MoreContent = () => {
  return <Fragment>{!isMobile ? <DesktopView /> : <MobileView />}</Fragment>
}

export default memo(MoreContent)
