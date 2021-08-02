import { Fragment } from 'react'
import dynamic from 'next/dynamic'

import usePlatform from '@/hooks/usePlatform'
import DesktopView from './DesktopView'

const MobileView = dynamic(() => import('./MobileView'), {
  ssr: false,
})

const MainEntries = (props) => {
  const { isMobile } = usePlatform()

  return (
    <Fragment>
      {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </Fragment>
  )
}

export default MainEntries
