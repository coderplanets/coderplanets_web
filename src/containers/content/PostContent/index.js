/*
 *
 * PostContent
 *
 */

import React from 'react'

import { isMobile } from '@/utils'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

const PostContentContainer = () => {
  return (
    <React.Fragment>
      {!isMobile ? <DesktopView /> : <MobileView />}
    </React.Fragment>
  )
}

export default PostContentContainer
