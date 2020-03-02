import React from 'react'

import {
  Wrapper,
  InnerWrapper,
  Copyrights,
  Thanks,
  ThxTitle,
} from './styles/bottom_info'
import { toggleBusBanner } from './logic'

const BottomInfo = () => (
  <Wrapper>
    <InnerWrapper>
      <Copyrights>©2019 All Rights Reserved</Copyrights>
      <Thanks onClick={toggleBusBanner}>
        <ThxTitle>特别鸣谢： (求赞助)</ThxTitle>
      </Thanks>
    </InnerWrapper>
  </Wrapper>
)

export default React.memo(BottomInfo)
