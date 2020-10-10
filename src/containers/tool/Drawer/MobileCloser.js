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
  setSwipeDonwY,
  swipeDownThreshold,
}) => {
  const handlers = useSwipeable(
    {
      // 判断最终是回到原来的位置还是隐藏 panel
      onSwiped: (eventData) => {
        if (options.direction === 'bottom') {
          const swipeDonwY = parseInt(Math.abs(eventData.deltaY), 10)
          if (swipeDonwY < swipeDownThreshold) {
            setSwipeDonwY(0)
          } else {
            closeDrawer()
            setSwipeDonwY(null)
          }
        } else {
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
          setSwipeDonwY(parseInt(Math.abs(eventData.deltaY), 10))
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
    return <BottomWrapper {...handlers}>{content}</BottomWrapper>
  }
  return <TopWrapper {...handlers}>{content}</TopWrapper>
}

export default MobileCloser
