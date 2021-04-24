import React from 'react'

import type { TSwipeOption } from '../spec'
import AddOn from '../AddOn'

import { DrawerOverlay, DrawerWrapper, DrawerContent } from '../styles'
import { closeDrawer } from '../logic'

type TProps = {
  testid?: string
  options: TSwipeOption
  visible: boolean
  rightOffset: string
  type: string
  imageUploading: boolean
  children: React.ReactNode
}

const DesktopView: React.FC<TProps> = ({
  testid = 'drawer-sidebar-panel',
  options,
  visible,
  rightOffset,
  type,
  imageUploading,
  children,
}) => {
  return (
    <React.Fragment>
      <DrawerOverlay visible={visible} onClick={() => closeDrawer()} />
      <DrawerWrapper
        testid={testid}
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
