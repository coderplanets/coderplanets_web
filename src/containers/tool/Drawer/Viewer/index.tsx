import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'

import { isMobile } from 'react-device-detect'

let CurrentView = null

/**
 * @param {object} props
 * @returns
 */
const Viewer = (props) => {
  useEffect(() => {
    if (!isMobile) {
      CurrentView = dynamic(() => import('./DesktopView'), { ssr: false })
    } else {
      CurrentView = dynamic(() => import('./MobileView'), { ssr: false })
    }
  }, [isMobile])

  return (
    <React.Fragment>{CurrentView && <CurrentView {...props} />}</React.Fragment>
  )
}

export default Viewer
