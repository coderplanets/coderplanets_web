import React from 'react'

import AddOn from '../AddOn'

import { DrawerOverlay, DrawerWrapper, DrawerContent } from '../styles'
import { closeDrawer } from '../logic'

const DesktopView = ({
  options,
  visible,
  rightOffset,
  type,
  imageUploading,
  children,
}) => {
  return (
    <React.Fragment>
      <DrawerOverlay visible={visible} onClick={closeDrawer} />
      <DrawerWrapper
        testid="drawer-sidebar-panel"
        visible={visible}
        rightOffset={rightOffset}
        type={type}
        mobile={false}
        options={options}
      >
        <AddOn type={type} imageUploading={imageUploading} />
        <DrawerContent>{children}</DrawerContent>
      </DrawerWrapper>
    </React.Fragment>
  )
}

export default React.memo(DesktopView)
