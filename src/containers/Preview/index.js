/*
 *
 * Preview
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@/utils'
import { useShortcut, useResize } from '@/hooks'

import SliderPreview from './SliderPreview'
import Viewer from './Viewer'

import { useInit, closePreview } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Preview')

const PreviewContainer = ({ preview: store }) => {
  const { width: windowWidth } = useResize()
  useInit(store, windowWidth)
  useShortcut('esc', closePreview)

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
    <React.Fragment>
      <SliderPreview
        visible={slideVisible}
        rightOffset={rightOffset}
        type={type}
        imageUploading={imageUploading}
      >
        <Viewer
          type={type}
          root={root}
          attachment={attachmentData}
          attUser={attUserData}
        />
      </SliderPreview>
    </React.Fragment>
  )
}

export default connectStore(PreviewContainer)
