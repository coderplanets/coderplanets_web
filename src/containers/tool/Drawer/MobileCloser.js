import React from 'react'

import { useSwipe } from '@/hooks'

import { TopWrapper, BottomWrapper, CloseBtn } from './styles/mobile_closer'

import { closeDrawer, onSwipedYHandler, onSwipingYHandler } from './logic'

const MobileCloser = ({ options, setSwipeUpY, setSwipeDownY }) => {
  const swipeHandlers = useSwipe({
    onSwiped: (ev) => onSwipedYHandler(ev, setSwipeUpY, setSwipeDownY),
    onSwiping: (ev) => onSwipingYHandler(ev, setSwipeUpY, setSwipeDownY),
  })

  const content = <CloseBtn onClick={closeDrawer} />

  if (options.direction === 'bottom') {
    return <BottomWrapper {...swipeHandlers}>{content}</BottomWrapper>
  }
  return <TopWrapper {...swipeHandlers}>{content}</TopWrapper>
}

export default MobileCloser
