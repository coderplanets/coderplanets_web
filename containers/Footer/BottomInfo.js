import React from 'react'

// import { ICON_CMD } from 'config'
import { Wrapper, Copyrights, Thanks, ThxTitle } from './styles/bottom_info'
import { toggleBusBanner } from './logic'

const BottomInfo = () => (
  <Wrapper>
    <Copyrights>©2018 All Rights Reserved</Copyrights>
    <Thanks onClick={toggleBusBanner}>
      <ThxTitle>特别鸣谢： (求赞助)</ThxTitle>
    </Thanks>
  </Wrapper>
)

export default BottomInfo
