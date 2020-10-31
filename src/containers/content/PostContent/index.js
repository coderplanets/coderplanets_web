/*
 *
 * PostContent
 *
 */

import React from 'react'

import { useDevice } from '@/hooks'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

const PostContentContainer = () => {
  const { isMobile } = useDevice()

  return (
    <React.Fragment>
      {!isMobile ? <DesktopView /> : <MobileView />}
    </React.Fragment>
  )
}

export default PostContentContainer
