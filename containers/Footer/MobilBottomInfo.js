import React from 'react'

import { GITHUB_WEB_ADDR, ISSUE_ADDR } from '@config'
import DotDivider from '@components/DotDivider'

import {
  SiteInfoWrapper,
  LinkInfoWrapper,
  BannerWrapper,
  Item,
  ItemBtn,
  Thanks,
  ThxTitle,
} from './styles/mobile_bottom_info'

import { toggleBusBanner, queryDoraemon } from './logic'

const MobileBottomInfo = () => (
  <React.Fragment>
    <LinkInfoWrapper>
      <ItemBtn as="a" href="/communities" rel="noopener noreferrer">
        所有社区
      </ItemBtn>
      <DotDivider radius="4px" />
      <ItemBtn onClick={queryDoraemon.bind(this, '/theme/')}>切换主题</ItemBtn>
    </LinkInfoWrapper>

    <SiteInfoWrapper>
      <Item href="/home/post/1" rel="noopener noreferrer" target="_blank">
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
    </SiteInfoWrapper>
    <BannerWrapper>
      <Thanks onClick={toggleBusBanner}>
        <ThxTitle>广告位： (求赞助)</ThxTitle>
      </Thanks>
    </BannerWrapper>
  </React.Fragment>
)

export default MobileBottomInfo
