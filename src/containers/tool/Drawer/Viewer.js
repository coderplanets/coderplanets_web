import React, { useState, useEffect } from 'react'
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
  options,
  visible,
  rightOffset,
  type,
  imageUploading,
  swipeDownThreshold,
  children,
}) => {
  const { mobile } = useMedia()
  const theme = useTheme()

  const [mobileVisible, setMobileVisible] = useState(false)
  // swipe action state for top && bottom
  // null means restore and close
  const [swipeDownY, setSwipeDownY] = useState(null)
  const [swipeUpY, setSwipeUpY] = useState(null)

  /**
   * is open drawer in mobile, should delay visible 200 milisec
   * wait for transition reset when animation switch between bottom/top
   * otherwise the drawer will slide from last positon
   * -----
   * 当在手机上打开滑块时，需要延迟 200 毫秒，以便让 transiton 复位，否则会导致
   * 在上下切换动画时 Drawer 会从上次结束的地方滑出。
   */
  useEffect(() => {
    if (mobile && visible) {
      setTimeout(() => {
        setMobileVisible(true)
      }, 200)
    } else {
      setMobileVisible(false)
    }
  }, [mobile, visible])

  const mobileDrawerVisible = visible ? mobileVisible : false
  const drawerVisible = !mobile ? visible : mobileDrawerVisible

  return (
    <div>
      <DrawerOverlay visible={visible} onClick={closeDrawer} />
      <DrawerWrapper
        testId="drawer-sidebar-panel"
        visible={drawerVisible}
        rightOffset={rightOffset}
        type={type}
        mobile={mobile}
        swipeUpY={swipeUpY}
        swipeDownY={swipeDownY}
        options={options}
      >
        <AddOn type={type} imageUploading={imageUploading} />
        {!mobile ? (
          <DrawerContent>{children}</DrawerContent>
        ) : (
          <DrawerMobileContent options={options} bgColor={theme.drawer.bg}>
            <MobileInnerContent options={options}>
              {children}
            </MobileInnerContent>
          </DrawerMobileContent>
        )}
        {mobile && (
          <MobileCloser
            options={options}
            setSwipeDownY={setSwipeDownY}
            setSwipeUpY={setSwipeUpY}
            swipeDownThreshold={swipeDownThreshold}
          />
        )}
      </DrawerWrapper>
    </div>
  )
}

export default React.memo(Viewer)
