import React from 'react'

import { useSwipe } from '@/hooks'

import {
  TopWrapper,
  BottomWrapper,
  CloseLineWrapper,
  LeftLine,
  RightLine,
} from './styles/mobile_closer'

import { closeDrawer, onSwipedYHandler, onSwipingYHandler } from './logic'

const CloseLine = ({ curve }) => {
  return (
    <CloseLineWrapper onClick={closeDrawer}>
      <LeftLine curve={curve} />
      <RightLine curve={curve} />
    </CloseLineWrapper>
  )
}

const MobileCloser = ({ options, setSwipeUpY, setSwipeDownY, canBeClose }) => {
  const swipeHandlers = useSwipe({
    onSwiped: (ev) => onSwipedYHandler(ev, setSwipeUpY, setSwipeDownY),
    onSwiping: (ev) => onSwipingYHandler(ev, setSwipeUpY, setSwipeDownY),
  })

  const content = <CloseLine curve={!canBeClose} />

  if (options.direction === 'bottom') {
    return <BottomWrapper {...swipeHandlers}>{content}</BottomWrapper>
  }
  return <TopWrapper {...swipeHandlers}>{content}</TopWrapper>
}

export default MobileCloser
