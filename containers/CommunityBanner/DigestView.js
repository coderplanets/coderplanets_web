import React from 'react'

import { ICON_CMD } from '../../config'
import Tabber from '../../components/Tabber'

import {
  Wrapper,
  BannerContentWrapper,
  TabberWrapper,
  CommunityWrapper,
  CommunityLogo,
  LogoWrapper,
  CommunityInfo,
  TitleWrapper,
  Title,
  GroupsIcon,
  Desc,
  LogoHolder,
} from './styles/digest_view'

import NumbersInfo from './NumbersInfo'
import { tabberChange } from './logic'

const CommunityLogoHolder = `${ICON_CMD}/community_logo_holder.svg`

const CommunityBrief = ({ content }) => (
  <CommunityWrapper>
    <LogoWrapper>
      {content.logo ? (
        <CommunityLogo src={content.logo || CommunityLogoHolder} />
      ) : (
        <LogoHolder src={CommunityLogoHolder} />
      )}
    </LogoWrapper>
    <CommunityInfo>
      <TitleWrapper>
        <Title>{content.title}</Title>
        <GroupsIcon src={`${ICON_CMD}/online_groups.svg`} />
      </TitleWrapper>
      <Desc>{content.desc}</Desc>
    </CommunityInfo>
  </CommunityWrapper>
)

const DigestView = ({ community, activeThread }) => (
  <Wrapper>
    <BannerContentWrapper>
      <CommunityBrief content={community} />
      <NumbersInfo content={community} />
      <TabberWrapper>
        <Tabber
          source={community.threads}
          onChange={tabberChange}
          active={activeThread}
        />
      </TabberWrapper>
    </BannerContentWrapper>
  </Wrapper>
)

export default DigestView
