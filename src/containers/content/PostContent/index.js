/*
 *
 * PostContent
 *
 */

import React from 'react'

import { useMedia } from '@/hooks'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

const PostContentContainer = () => {
  const { mobile } = useMedia()

  return (
    <React.Fragment>{mobile ? <MobileView /> : <DesktopView />}</React.Fragment>
  )
}

export default PostContentContainer
