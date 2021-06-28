import { Fragment, memo } from 'react'

import { useDevice } from '@/hooks'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

const Content = (props) => {
  const { isMobile } = useDevice()

  return (
    <Fragment>
      {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </Fragment>
  )
}

export default memo(Content)
