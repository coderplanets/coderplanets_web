import React, { useState, useRef, useCallback } from 'react'
import { Waypoint } from 'react-waypoint'

import { useCustomScroll } from '@hooks'

import FeedsBar from '@components/FeedsBar'

import Footer from './Footer'

import {
  Wrapper,
  NewsWrapper,
  NewsInnerWrapper,
  LeftShadowBar,
  RightShadowBar,
  ShadowBarHolder,
  FooterWrapper,
} from './styles/news_board'

const NewsBoard = () => {
  const [showLeftShadow, setShowLeftShadow] = useState(false)
  const [showRightShadow, setShowRightShadow] = useState(true)

  const handleShowLeftShadow = useCallback(() => setShowLeftShadow(true), [])
  const handleHideLeftShadow = useCallback(() => setShowLeftShadow(false), [])

  const handleShowRightShadow = useCallback(() => setShowRightShadow(true), [])
  const handleHideRightShadow = useCallback(() => setShowRightShadow(false), [])

  const ref = useRef(null)
  useCustomScroll(ref, { scrollbars: { autoHide: 'never' } })

  return (
    <Wrapper>
      <LeftShadowBar show={showLeftShadow} />
      <NewsWrapper ref={ref}>
        <NewsInnerWrapper>
          <Waypoint
            horizontal
            onEnter={handleHideLeftShadow}
            onLeave={handleShowLeftShadow}
          />
          <FeedsBar title="Github Trending" numIndex={0} />
          <FeedsBar title="国外社区动态" numIndex={1} />
          <FeedsBar title="国内社区动态" numIndex={2} />
          <FeedsBar title="象牙塔" numIndex={3} />
          <FeedsBar title="独立博客" numIndex={4} />
          <FeedsBar title="播客" numIndex={5} />
          <ShadowBarHolder />
          <Waypoint
            horizontal
            onEnter={handleHideRightShadow}
            onLeave={handleShowRightShadow}
          />
        </NewsInnerWrapper>
      </NewsWrapper>
      <RightShadowBar show={showRightShadow} />
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Wrapper>
  )
}

export default React.memo(NewsBoard)
