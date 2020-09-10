import React from 'react'
import { useTheme } from 'styled-components'

import { useMedia } from '@/hooks'
import AddOn from './AddOn'
import MobileCloser from './MobileCloser'

import {
  DrawerOverlay,
  DrawerWrapper,
  DrawerContent,
  DrawerMobileContent,
  MobileInnerContent,
} from './styles'
import { closeDrawer } from './logic'

const Viewer = ({
  visible,
  animation,
  rightOffset,
  type,
  imageUploading,
  children,
}) => {
  const { mobile } = useMedia()
  const theme = useTheme()

  return (
    <div>
      <DrawerOverlay visible={visible} onClick={closeDrawer} />
      <DrawerWrapper
        testId="drawer-sidebar-panel"
        visible={visible}
        rightOffset={rightOffset}
        type={type}
        mobile={mobile}
        animation={animation}
      >
        <AddOn type={type} imageUploading={imageUploading} />
        {!mobile ? (
          <DrawerContent>{children}</DrawerContent>
        ) : (
          <DrawerMobileContent animation={animation} bgColor={theme.drawer.bg}>
            <MobileInnerContent animation={animation}>
              {children}
            </MobileInnerContent>
          </DrawerMobileContent>
        )}
        {mobile && <MobileCloser animation={animation} />}
      </DrawerWrapper>
    </div>
  )
}

export default React.memo(Viewer)
