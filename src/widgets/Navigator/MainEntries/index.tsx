import { Fragment } from 'react'
import dynamic from 'next/dynamic'
import { isMobile } from 'react-device-detect'

import DesktopView from './DesktopView'

const MobileView = dynamic(() => import('./MobileView'), {
  ssr: false,
})

const MainEntries = (props) => {
  return (
    <Fragment>
      {/* @ts-ignore */}
      {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </Fragment>
  )
}

export default MainEntries
