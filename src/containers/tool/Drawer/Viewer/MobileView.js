import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

import { useSwipe } from '@/hooks'

import AddOn from '../AddOn'
import MobileCloser from '../MobileCloser'

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

const Viewer = ({ options, visible, type, imageUploading, children }) => {
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

  const swipeHandlers = useSwipe({
    onSwiped: (ev) => onSwipedYHandler(ev, setSwipeUpY, setSwipeDownY),
    onSwiping: (ev) => onSwipingYHandler(ev, setSwipeUpY, setSwipeDownY),
  })

  return (
    <div>
      <DrawerOverlay visible={visible} onClick={closeDrawer} />
      <DrawerWrapper
        testId="drawer-sidebar-panel"
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
        <MobileCloser
          options={options}
          setSwipeDownY={setSwipeDownY}
          setSwipeUpY={setSwipeUpY}
        />
      </DrawerWrapper>
    </div>
  )
}

export default React.memo(Viewer)
