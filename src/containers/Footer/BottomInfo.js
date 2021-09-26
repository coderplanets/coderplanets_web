import React from 'react'

import { Wrapper, InnerWrapper, Beian, Copyrights } from './styles/bottom_info'
// import { toggleBusBanner } from './logic'

const BottomInfo = () => (
  <Wrapper>
    <InnerWrapper>
      <Beian
        href="https://beian.miit.gov.cn"
        rel="noopener noreferrer"
        target="_blank"
      >
        蜀ICP备17043722号-4
      </Beian>
      <Copyrights>©2019 All Rights Reserved</Copyrights>
    </InnerWrapper>
  </Wrapper>
)

export default BottomInfo
