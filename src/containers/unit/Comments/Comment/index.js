import React from 'react'

import { useMedia } from '@/hooks'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

const Comment = (props) => {
  const { mobile } = useMedia()

  return (
    <React.Fragment>
      {!mobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </React.Fragment>
  )
}

export default React.memo(Comment)
