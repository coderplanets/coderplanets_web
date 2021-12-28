import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { isMobile } from 'react-device-detect'

let CurTopBar = null

const Topbar = (props) => {
  useEffect(() => {
    if (isMobile) {
      CurTopBar = dynamic(() => import('./MobileView/index'), { ssr: false })
    }
    // else {
    //   CurTopBar = dynamic(() => import('./DesktopView'), { ssr: false })
    // }
  }, [])

  return (
    <React.Fragment>{CurTopBar && <CurTopBar {...props} />}</React.Fragment>
  )
}

export default React.memo(Topbar)
