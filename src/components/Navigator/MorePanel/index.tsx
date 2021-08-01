import { Fragment, memo } from 'react'

import usePlatform from '@/hooks/usePlatform'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

const MoreContent = () => {
  const { isMobile } = usePlatform()
  return <Fragment>{!isMobile ? <DesktopView /> : <MobileView />}</Fragment>
}

export default memo(MoreContent)
