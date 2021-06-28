import { Fragment } from 'react'

import { useDevice } from '@/hooks'

import DesktopView from './DesktopView/index'
import MobileView from './MobileView/index'

const DigestView = (props) => {
  const { isMobile } = useDevice()

  return (
    <Fragment>
      {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </Fragment>
  )
}

export default DigestView
