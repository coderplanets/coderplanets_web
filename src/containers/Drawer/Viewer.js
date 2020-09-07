import React from 'react'

import { useMedia } from '@/hooks'
import AddOn from './AddOn'
import MobileCloser from './MobileCloser'

import {
  DrawerOverlay,
  DrawerWrapper,
  DrawerContent,
  ContentInnerWrapper,
} from './styles'
import { closeDrawer } from './logic'

const Viewer = ({ visible, rightOffset, type, imageUploading, children }) => {
  const { mobile } = useMedia()

  return (
    <div>
      <DrawerOverlay visible={visible} onClick={closeDrawer} />
      <DrawerWrapper
        testId="drawer-sidebar-panel"
        visible={visible}
        rightOffset={rightOffset}
        type={type}
        mobile={mobile}
      >
        <AddOn type={type} imageUploading={imageUploading} />
        {!mobile ? (
          <DrawerContent>{children}</DrawerContent>
        ) : (
          <DrawerContent>
            <ContentInnerWrapper>{children}</ContentInnerWrapper>
          </DrawerContent>
        )}
        {mobile && <MobileCloser />}
      </DrawerWrapper>
    </div>
  )
}

export default React.memo(Viewer)
