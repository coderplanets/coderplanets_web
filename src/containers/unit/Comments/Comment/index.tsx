import { Fragment, memo } from 'react'

import usePlatform from '@/hooks/usePlatform'

import DesktopView from './DesktopView'
// import MobileView from './MobileView/index'

const Comment = (props) => {
  const { isMobile } = usePlatform()

  return <DesktopView {...props} />
  // return (
  //   <Fragment>
  //     {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
  //   </Fragment>
  // )
}

export default memo(Comment)
