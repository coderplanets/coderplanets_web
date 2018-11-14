import React from 'react'

import { ICON_CMD } from '../../config'

import { Tabber, CommunityStatesPad, CommunityHolder } from '../../components'

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

import { tabberChange, showEditorList } from './logic'

const CommunityLogoHolder = `${ICON_CMD}/community_logo_holder.svg`

const CommunityBrief = ({ content }) => (
  <CommunityWrapper>
    <LogoWrapper>
      {content.logo ? (
        <CommunityLogo
          src={content.logo}
          loading={<CommunityHolder text={content.raw} />}
        />
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

const DigestView = ({ community, activeThread, layout }) => (
  <Wrapper>
    <BannerContentWrapper>
      <CommunityBrief content={community} />
      <CommunityStatesPad
        community={community}
        onShowEditorList={showEditorList}
      />
      <TabberWrapper>
        <Tabber
          source={community.threads}
          onChange={tabberChange}
          active={activeThread}
          layout={layout}
          communityRaw={community.raw}
        />
      </TabberWrapper>
    </BannerContentWrapper>
  </Wrapper>
)

export default DigestView
