import { Fragment, memo } from 'react'

import usePlatform from '@/hooks/usePlatform'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

const Content = (props) => {
  const { isMobile } = usePlatform()

  return (
    <Fragment>
      {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </Fragment>
  )
}

export default memo(Content)
