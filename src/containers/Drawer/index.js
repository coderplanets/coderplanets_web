/*
 *
 * Preview
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@/utils'
import { useShortcut, useResize } from '@/hooks'

import Viewer from './Viewer'
import Content from './Content'

import { useInit, closeDrawer } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Preview')

const DrawerContainer = ({ drawer: store }) => {
  const { width: windowWidth } = useResize()
  useInit(store, windowWidth)
  useShortcut('Escape', closeDrawer)

  const {
    slideVisible,
    type,
    root,
    attachmentData,
    attUserData,
    imageUploading,
    rightOffset,
  } = store

  return (
    <Viewer
      visible={slideVisible}
      rightOffset={rightOffset}
      type={type}
      imageUploading={imageUploading}
    >
      <Content
        type={type}
        root={root}
        attachment={attachmentData}
        attUser={attUserData}
      />
    </Viewer>
  )
}

export default connectStore(DrawerContainer)
