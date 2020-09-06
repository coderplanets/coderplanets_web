import React from 'react'

import { useMedia } from '@/hooks'
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
  const { mobile } = useMedia()

  return (
    <React.Fragment>
      <PreviewOverlay visible={visible} onClick={closePreview} />
      <PreviewWrapper
        testId="preview-sidebar-panel"
        visible={visible}
        rightOffset={rightOffset}
        type={type}
        mobile={mobile}
      >
        <AddOn type={type} imageUploading={imageUploading} />
        <PreviewContent>{children}</PreviewContent>
      </PreviewWrapper>
    </React.Fragment>
  )
}

export default React.memo(SliderPreview)
