import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'

import { useMedia } from '@/hooks'

let CurTopBar = null

const Topbar = (props) => {
  const { mobile } = useMedia()

  useEffect(() => {
    if (mobile) {
      CurTopBar = dynamic(() => import('./MobileView/index'), { ssr: false })
    } else {
      CurTopBar = dynamic(() => import('./DesktopView'), { ssr: false })
    }
  }, [mobile])

  return (
    <React.Fragment>{CurTopBar && <CurTopBar {...props} />}</React.Fragment>
  )
}

export default React.memo(Topbar)
