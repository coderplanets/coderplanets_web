import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'

import { useMedia } from '@/hooks'

let CurrentView = null

/**
 *
 *
 * @param {*} props
 * @returns
 */
const Viewer = (props) => {
  const { mobile } = useMedia()

  useEffect(() => {
    if (!mobile) {
      CurrentView = dynamic(() => import('./DesktopView'), { ssr: false })
    } else {
      CurrentView = dynamic(() => import('./MobileView'), { ssr: false })
    }
  }, [mobile])

  return (
    <React.Fragment>{CurrentView && <CurrentView {...props} />}</React.Fragment>
  )
}

export default Viewer
