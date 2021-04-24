import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

import { useSwipe } from '@/hooks'

import AddOn from '../AddOn'
import Header from '../Header'

import {
  DrawerOverlay,
  DrawerWrapper,
  DrawerMobileContent,
  MobileInnerContent,
} from '../styles'

import {
  closeDrawer,
  onSwipedYHandler,
  onSwipingYHandler,
  resetSwipeAviliable,
} from '../logic'

const Viewer = ({
  headerText,
  options,
  visible,
  type,
  imageUploading,
  canBeClose,
  showHeaderText,
  disableContentDrag,
  children,
}) => {
  const theme = useTheme()
  // swipe action state for top && bottom
  // null means restore and close
  const [swipeDownY, setSwipeDownY] = useState(null)
  const [swipeUpY, setSwipeUpY] = useState(null)

  // NOTE: important: reset swipe position when drawer closed
  useEffect(() => {
    if (!visible) {
      setSwipeDownY(null)
      setSwipeUpY(null)
      resetSwipeAviliable()
    }
  }, [visible])

  /**
   * 注意这里有一个坑，在进入 Drawer 滑动到最底部快速往上滑动时
   * CustomScroller 不会阻止 swipe 状态，导致 swipe 状态依然在
   * 记录中，这是松手会导致 Drawer 以外关闭，需要在下层 Content 中
   * 做时间差处理
   */
  const swipeHandlers = useSwipe({
    onSwiped: (ev) => {
      if (disableContentDrag) return false
      onSwipedYHandler(ev, setSwipeUpY, setSwipeDownY)
    },
    onSwiping: (ev) => {
      if (disableContentDrag) return false
      onSwipingYHandler(ev, setSwipeUpY, setSwipeDownY)
    },
  })

  return (
    <div>
      <DrawerOverlay visible={visible} onClick={() => closeDrawer()} />
      <DrawerWrapper
        testid="drawer-sidebar-panel"
        visible={visible}
        type={type}
        swipeUpY={swipeUpY}
        swipeDownY={swipeDownY}
        options={options}
        mobile
      >
        <AddOn type={type} imageUploading={imageUploading} />
        <DrawerMobileContent options={options} bgColor={theme.drawer.bg}>
          <MobileInnerContent
            options={options}
            swipeUpY={swipeUpY}
            swipeDownY={swipeDownY}
            {...swipeHandlers}
          >
            {children}
          </MobileInnerContent>
        </DrawerMobileContent>
        <Header
          headerText={headerText}
          options={options}
          setSwipeDownY={setSwipeDownY}
          setSwipeUpY={setSwipeUpY}
          canBeClose={canBeClose}
          showHeaderText={showHeaderText}
        />
      </DrawerWrapper>
    </div>
  )
}

export default React.memo(Viewer)
