import React, { useRef } from 'react'

import { useCustomScroll } from '@hooks'

import FeedsBar from '@components/FeedsBar'

import Footer from './Footer'

import {
  Wrapper,
  NewsWrapper,
  NewsInnerWrapper,
  FooterWrapper,
} from './styles/news_board'

const NewsBoard = () => {
  const ref = useRef(null)
  useCustomScroll(ref, { scrollbars: { autoHide: 'never' } })

  return (
    <Wrapper>
      <NewsWrapper ref={ref}>
        <NewsInnerWrapper>
          <FeedsBar title="国外社区动态" numIndex={0} />
          <FeedsBar title="国内社区动态" numIndex={1} />
          <FeedsBar title="象牙塔" numIndex={2} />
          <FeedsBar title="独立博客" numIndex={3} />
          <FeedsBar title="播客" numIndex={4} />
        </NewsInnerWrapper>
      </NewsWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Wrapper>
  )
}

export default React.memo(NewsBoard)
