import React from 'react'

import {
  Wrapper,
  InnerWrapper,
  Copyrights,
  Thanks,
  ThxTitle,
  BeianLink,
} from './styles/bottom_info'
import { toggleBusBanner } from './logic'

const BottomInfo = () => (
  <Wrapper>
    <InnerWrapper>
      <Copyrights>
        <BeianLink
          href="http://www.miitbeian.gov.cn"
          rel="noopener noreferrer"
          target="_blank"
        >
          蜀ICP备17043722号-4
        </BeianLink>
      </Copyrights>
      <Thanks onClick={toggleBusBanner}>
        <ThxTitle>特别鸣谢： (求赞助)</ThxTitle>
      </Thanks>
    </InnerWrapper>
  </Wrapper>
)

export default React.memo(BottomInfo)
