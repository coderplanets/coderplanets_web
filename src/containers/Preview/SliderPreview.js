import React from 'react'

import AddOn from './AddOn'

import { PreviewOverlay, PreviewWrapper, PreviewContent } from './styles'
import { closePreview } from './logic'

const SliderPreview = ({
  visible,
  rightOffset,
  type,
  imageUploading,
  children,
}) => {
  return (
    <React.Fragment>
      <PreviewOverlay visible={visible} onClick={closePreview} />
      <PreviewWrapper
        testId="preview-sidebar-panel"
        visible={visible}
        rightOffset={rightOffset}
        type={type}
      >
        <AddOn type={type} imageUploading={imageUploading} />
        <PreviewContent>{children}</PreviewContent>
      </PreviewWrapper>
    </React.Fragment>
  )
}

export default React.memo(SliderPreview)
