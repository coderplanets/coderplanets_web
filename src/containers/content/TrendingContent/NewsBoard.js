import React from 'react'

import CustomScroller from '@/widgets/CustomScroller'
import FeedsBar from '@/widgets/FeedsBar'

import Footer from './Footer'

import { Wrapper, ShadowBarHolder, FooterWrapper } from './styles/news_board'

const NewsBoard = () => {
  return (
    <Wrapper>
      <CustomScroller
        direction="horizontal"
        height="90vh"
        innerHeight="89vh"
        shadowSize="large"
        withBorder
      >
        <FeedsBar title="Github Trending" numIndex={0} />
        <FeedsBar title="国外社区动态" numIndex={1} />
        <FeedsBar title="国内社区动态" numIndex={2} />
        <FeedsBar title="象牙塔" numIndex={3} />
        <FeedsBar title="独立博客" numIndex={4} />
        <FeedsBar title="播客" numIndex={5} />
        <ShadowBarHolder />
      </CustomScroller>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Wrapper>
  )
}

export default React.memo(NewsBoard)
