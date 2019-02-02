/*
 *
 * Preview
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storePlug } from 'utils'

import SliderPreview from './SliderPreview'
import ModalPreview from './ModalPreview'

import Viewer from './Viewer'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Preview')

class PreviewContainer extends React.Component {
  componentDidMount() {
    const { preview } = this.props
    logic.init(preview)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { preview } = this.props
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
        <ModalPreview visible={modalVisible}>
          <Viewer
            type={type}
            root={root}
            attachment={attachmentData}
            attUser={attUserData}
          />
        </ModalPreview>

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
      </React.Fragment>
    )
  }
}

export default inject(storePlug('preview'))(observer(PreviewContainer))
