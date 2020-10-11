import React from 'react'

import { ICON_CMD } from '@/config'
import { useSwipe } from '@/hooks'

import {
  TopWrapper,
  BottomWrapper,
  CloseBtn,
  UpIcon,
} from './styles/mobile_closer'

import { closeDrawer, onSwipedYHandler, onSwipingYHandler } from './logic'

const MobileCloser = ({ options, setSwipeUpY, setSwipeDownY }) => {
  const swipeHandlers = useSwipe({
    onSwiped: (eventData) =>
      onSwipedYHandler(eventData, setSwipeUpY, setSwipeDownY),

    onSwiping: (eventData) =>
      onSwipingYHandler(eventData, setSwipeUpY, setSwipeDownY),
  })

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
