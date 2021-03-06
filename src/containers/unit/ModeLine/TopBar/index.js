import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'

import { useDevice } from '@/hooks'

let CurTopBar = null

const Topbar = (props) => {
  const { isMobile } = useDevice()

  useEffect(() => {
    if (isMobile) {
      CurTopBar = dynamic(() => import('./MobileView/index'), { ssr: false })
    }
    // else {
    //   CurTopBar = dynamic(() => import('./DesktopView'), { ssr: false })
    // }
  }, [isMobile])

  return (
    <React.Fragment>{CurTopBar && <CurTopBar {...props} />}</React.Fragment>
  )
}

export default React.memo(Topbar)
