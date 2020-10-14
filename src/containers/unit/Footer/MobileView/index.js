import React from 'react'

import { ICON_BASE } from '@/config'

import {
  Wrapper,
  SiteWrapper,
  SiteLogo,
  SiteTitle,
  SiteInfoWrapper,
  Item,
  Divider,
  VersionWrapper,
} from '../styles/mobile_view'

const MobileView = () => (
  <Wrapper>
    <SiteWrapper>
      <SiteLogo src={`${ICON_BASE}/site_logo.svg`} />
      <SiteTitle>coderplanets</SiteTitle>
    </SiteWrapper>

    <SiteInfoWrapper>
      <Item>关于本站</Item>
      <Divider space="8px" radius="3px" />
      <Item>用户反馈</Item>
      <Divider space="8px" radius="3px" />
      <Item>打赏赞助</Item>
    </SiteInfoWrapper>
    <VersionWrapper>
      <Item>v1.0.3</Item>
    </VersionWrapper>
  </Wrapper>
)

export default React.memo(MobileView)
