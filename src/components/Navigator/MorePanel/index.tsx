import { Fragment, memo } from 'react'

import { useDevice } from '@/hooks'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

const MoreContent = () => {
  const { isMobile } = useDevice()

  return <Fragment>{!isMobile ? <DesktopView /> : <MobileView />}</Fragment>
}

export default memo(MoreContent)
