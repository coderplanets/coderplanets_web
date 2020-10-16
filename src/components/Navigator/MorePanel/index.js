import React from 'react'

import { useMedia } from '@/hooks'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

const MoreContent = () => {
  const { mobile } = useMedia()

  return (
    <React.Fragment>
      {!mobile ? <DesktopView /> : <MobileView />}
    </React.Fragment>
  )
}

export default React.memo(MoreContent)
