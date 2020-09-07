import React from 'react'

import { useMedia } from '@/hooks'
import AddOn from './AddOn'
import MobileCloser from './MobileCloser'

import {
  PreviewOverlay,
  PreviewWrapper,
  PreviewContent,
  ContentInnerWrapper,
} from './styles'
import { closeDrawer } from './logic'

const SliderPreview = ({
  visible,
  rightOffset,
  type,
  imageUploading,
  children,
}) => {
  const { mobile } = useMedia()

  return (
    <div>
      <PreviewOverlay visible={visible} onClick={closeDrawer} />
      <PreviewWrapper
        testId="drawer-sidebar-panel"
        visible={visible}
        rightOffset={rightOffset}
        type={type}
        mobile={mobile}
      >
        <AddOn type={type} imageUploading={imageUploading} />
        {!mobile ? (
          <PreviewContent>{children}</PreviewContent>
        ) : (
          <PreviewContent>
            <ContentInnerWrapper>{children}</ContentInnerWrapper>
          </PreviewContent>
        )}
        {mobile && <MobileCloser />}
      </PreviewWrapper>
    </div>
  )
}

export default React.memo(SliderPreview)
