import { memo } from 'react'

// import { isMobile } from 'react-device-detect'

import DesktopView from './DesktopView'
// import MobileView from './MobileView/index'

const Comment = (props) => {
  return <DesktopView {...props} />
  // return (
  //   <Fragment>
  //     {!isMobile ? <DesktopView {...props} /> : <MobileView {...props} />}
  //   </Fragment>
  // )
}

export default memo(Comment)
