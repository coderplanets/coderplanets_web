import React from 'react'

import { useSwipeable } from 'react-swipeable'
import { ICON_CMD } from '@/config'

import {
  TopWrapper,
  BottomWrapper,
  CloseBtn,
  UpIcon,
} from './styles/mobile_closer'

import { closeDrawer } from './logic'

const MobileCloser = ({
  options,
  setSwipeUpY,
  setSwipeDownY,
  swipeDownThreshold,
}) => {
  const swipeHandlers = useSwipeable(
    {
      // 判断最终是回到原来的位置还是隐藏 panel
      onSwiped: (eventData) => {
        if (options.direction === 'bottom') {
          const swipeDonwY = parseInt(Math.abs(eventData.deltaY), 10)
          if (swipeDonwY < swipeDownThreshold) {
            setSwipeDownY(0)
          } else {
            closeDrawer()
            setSwipeDownY(null)
          }
        } else {
          // handle top direction situation
          const swipeUpY = parseInt(Math.abs(eventData.deltaY), 10)
          if (swipeUpY < swipeDownThreshold) {
            setSwipeUpY(0)
          } else {
            closeDrawer()
            setSwipeUpY(null)
          }
        }
      },
      onSwiping: (eventData) => {
        if (eventData.dir === 'Up') {
          setSwipeUpY(parseInt(Math.abs(eventData.deltaY), 10))
        }

        if (eventData.dir === 'Down') {
          setSwipeDownY(parseInt(Math.abs(eventData.deltaY), 10))
        }
      },
    },
    {},
  )

  const content = (
    <CloseBtn onClick={closeDrawer}>
      <UpIcon src={`${ICON_CMD}/up_o.svg`} />
    </CloseBtn>
  )

  if (options.direction === 'bottom') {
    return <BottomWrapper {...swipeHandlers}>{content}</BottomWrapper>
  }
  return <TopWrapper {...swipeHandlers}>{content}</TopWrapper>
}

export default MobileCloser
