import { Fragment } from 'react'

import usePlatform from '@/hooks/usePlatform'

import DesktopView from './DesktopView/index'
import MobileView from './MobileView/index'

const DigestView = (props) => {
  const { isMobile } = usePlatform()

  return (
    <Fragment>
      {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </Fragment>
  )
}

export default DigestView
