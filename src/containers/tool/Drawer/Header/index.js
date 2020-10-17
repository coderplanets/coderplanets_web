import React from 'react'

import { useSwipe } from '@/hooks'

import CloseLine from './CloseLine'
import { TopWrapper, BottomWrapper } from '../styles/header'
import { onSwipedYHandler, onSwipingYHandler } from '../logic'

/* <TextWrapper>评论共 167 条</TextWrapper> */

const Header = ({ options, setSwipeUpY, setSwipeDownY, canBeClose }) => {
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

export default Header
