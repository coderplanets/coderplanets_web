import React from 'react'

import { GITHUB_WEB_ADDR, ISSUE_ADDR } from 'config'
import DotDivider from 'components/DotDivider'

import {
  MainInfoWrapper,
  BannerWrapper,
  Item,
  Thanks,
  ThxTitle,
} from './styles/mobile_bottom_info'

import { toggleBusBanner } from './logic'

const MobileBottomInfo = () => (
  <React.Fragment>
    <MainInfoWrapper>
      <Item
        href="https://coderplanets.com/home/post/1"
        rel="noopener noreferrer"
        target="_blank"
      >
        关于本站
      </Item>
      <DotDivider />
      <Item
        href={`${GITHUB_WEB_ADDR}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        源代码
      </Item>
      <DotDivider />
      <Item href={`${ISSUE_ADDR}`} rel="noopener noreferrer" target="_blank">
        反馈与建议
      </Item>
    </MainInfoWrapper>
    <BannerWrapper>
      <Thanks onClick={toggleBusBanner}>
        <ThxTitle>广告位： (求赞助)</ThxTitle>
      </Thanks>
    </BannerWrapper>
  </React.Fragment>
)

export default MobileBottomInfo
