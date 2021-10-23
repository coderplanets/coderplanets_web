import { Fragment, useEffect } from 'react'
import dynamic from 'next/dynamic'

import usePlatform from '@/hooks/usePlatform'

let CurrentView = null

/**
 * @param {object} props
 * @returns
 */
const Viewer = (props) => {
  const { isMobile } = usePlatform()

  useEffect(() => {
    if (!isMobile) {
      CurrentView = dynamic(() => import('./DesktopView'), { ssr: false })
    } else {
      CurrentView = dynamic(() => import('./MobileView'), { ssr: false })
    }
  }, [isMobile])

  return <Fragment>{CurrentView && <CurrentView {...props} />}</Fragment>
}

export default Viewer
