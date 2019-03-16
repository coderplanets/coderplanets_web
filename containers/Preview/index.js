/*
 *
 * Preview
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storePlug, isBrowser } from 'utils'

import SliderPreview from './SliderPreview'
import ModalPreview from './ModalPreview'

import Viewer from './Viewer'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Preview')

const getDocument = () => (isBrowser() ? document : null)

class PreviewContainer extends React.Component {
  componentDidMount() {
    const { preview } = this.props
    logic.init(preview)

    const safeDocument = getDocument()
    if (safeDocument) {
      safeDocument.addEventListener('keydown', this.escHandler, false)
    }
  }

  componentWillUnmount() {
    logic.uninit()

    const safeDocument = getDocument()

    if (safeDocument) {
      safeDocument.removeEventListener('keydown', this.escHandler, false)
    }
  }

  /* eslint-disable-next-line */
  escHandler(event) {
    if (event.keyCode === 27) {
      debug('previewer keycode')
      logic.closePreview()
    }
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
}

export default inject(storePlug('preview'))(observer(PreviewContainer))
