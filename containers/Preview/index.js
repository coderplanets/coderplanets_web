/*
 *
 * Preview
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@utils'
import { useShortcut, usePlatform } from '@hooks'

import SliderPreview from './SliderPreview'
import ModalPreview from './ModalPreview'
import Viewer from './Viewer'

import { useInit, useScrollbar, closePreview } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Preview')

const PreviewContainer = ({ preview }) => {
  useInit(preview)
  useShortcut('esc', closePreview)

  const { isMacOS } = usePlatform()
  useScrollbar(isMacOS)

  const {
    modalVisible,
    slideVisible,
    type,
    root,
    attachmentData,
    attUserData,
    imageUploading,
  } = preview

  return (
    <React.Fragment>
      {modalVisible && (
        <ModalPreview visible={modalVisible}>
          <Viewer
            type={type}
            root={root}
            attachment={attachmentData}
            attUser={attUserData}
          />
        </ModalPreview>
      )}

      {slideVisible && (
        <SliderPreview
          visible={slideVisible}
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
      )}
    </React.Fragment>
  )
}

export default connectStore(PreviewContainer)
