import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { Waypoint } from 'react-waypoint'

import { useSwipe } from '@/hooks'

import AddOn from '../AddOn'
import MobileCloser from '../MobileCloser'

import {
  DrawerOverlay,
  DrawerWrapper,
  DrawerMobileContent,
  MobileInnerContent,
} from '../styles'

import { closeDrawer, onSwipedYHandler, onSwipingYHandler } from '../logic'

const Viewer = ({ options, visible, type, imageUploading, children }) => {
  const theme = useTheme()
  // when top/bottom has no content, the whole panel can be swipeable
  // like tiktok style
  const [swipeDownAviliable, setSwipeDownAviliable] = useState(true)
  const [swipeUpAviliable, setSwipeUpAviliable] = useState(true)

  // swipe action state for top && bottom
  // null means restore and close
  const [swipeDownY, setSwipeDownY] = useState(null)
  const [swipeUpY, setSwipeUpY] = useState(null)

  const swipeHandlers = useSwipe({
    onSwiped: (ev) => onSwipedYHandler(ev, setSwipeUpY, setSwipeDownY),
    onSwiping: (ev) =>
      onSwipingYHandler(
        ev,
        setSwipeUpY,
        setSwipeDownY,
        swipeUpAviliable,
        swipeDownAviliable,
      ),
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
          <MobileInnerContent options={options} {...swipeHandlers}>
            <Waypoint
              onEnter={() => setSwipeDownAviliable(true)}
              onLeave={() => setSwipeDownAviliable(false)}
            />
            {children}
            <Waypoint
              onEnter={() => setSwipeUpAviliable(true)}
              onLeave={() => setSwipeUpAviliable(false)}
            />
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
