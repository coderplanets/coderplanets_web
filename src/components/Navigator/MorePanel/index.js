import React from 'react'

import { isMobile } from '@/utils'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

const MoreContent = () => {
  return (
    <React.Fragment>
      {!isMobile ? <DesktopView /> : <MobileView />}
    </React.Fragment>
  )
}

export default React.memo(MoreContent)
