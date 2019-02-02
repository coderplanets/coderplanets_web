import React from 'react'

// import { ICON_CMD } from '../../config'
// import { Wrapper } from './styles'
import AddOn from './AddOn'

import { PreviewOverlay, PreviewWrapper, PreviewContent } from './styles'

import { closePreview } from './logic'

const SliderPreview = ({ visible, type, imageUploading, children }) => (
  <React.Fragment>
    <PreviewOverlay visible={visible} onClick={closePreview} />
    <PreviewWrapper visible={visible} type={type}>
      <AddOn type={type} imageUploading={imageUploading} />
      <PreviewContent>{children}</PreviewContent>
    </PreviewWrapper>
  </React.Fragment>
)

export default SliderPreview
