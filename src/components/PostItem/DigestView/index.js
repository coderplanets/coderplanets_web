import React from 'react'

import { useDevice } from '@/hooks'

import DesktopView from './DesktopView/index'
import MobileView from './MobileView/index'

const DigestView = (props) => {
  const { isMobile } = useDevice()

  return (
    <React.Fragment>
      {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </React.Fragment>
  )
}

export default DigestView
