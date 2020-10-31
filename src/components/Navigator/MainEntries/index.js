import React from 'react'

import { isMobile } from '@/utils'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

const MainEntries = (props) => {
  return (
    <React.Fragment>
      {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </React.Fragment>
  )
}

export default MainEntries
