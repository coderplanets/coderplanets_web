import React from 'react'

import { ICON_CMD } from '../../config'
// import Popover from '../Popover'

import {
  Wrapper,
  CardWrapper,
  CommunityWrapper,
  CommunityLogo,
  CommunityInfo,
  LogoText,
  CommunityTitle,
  Breadcrumbs,
  BetaLogo,
  SiteMapWrapper,
  DotDivider,
  SiteLink,
  LogoHolder,
} from './style/simple_view'

const CommunityLogoHolder = `${ICON_CMD}/community_logo_holder.svg`

const SimpleView = ({ curCommunity: { logo, title } }) => (
  <Wrapper>
    <CardWrapper>
      <CommunityWrapper>
        {logo ? (
          <CommunityLogo src={logo} />
        ) : (
          <LogoHolder src={CommunityLogoHolder} />
        )}
        <CommunityInfo>
          <LogoText>coderplanets</LogoText>
          <CommunityTitle>{title}</CommunityTitle>
        </CommunityInfo>
      </CommunityWrapper>
    </CardWrapper>
    <Breadcrumbs>
      <BetaLogo src={`${ICON_CMD}/beta.svg`} />
      <SiteMapWrapper>
        <SiteLink>首页</SiteLink>
        <DotDivider />
        <SiteLink>社区</SiteLink>
      </SiteMapWrapper>
    </Breadcrumbs>
  </Wrapper>
)

export default SimpleView
