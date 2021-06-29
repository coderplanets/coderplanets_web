import React from 'react'
import { contains } from 'ramda'

import { HCN, THREAD, NON_FILL_COMMUNITY, VIEW } from '@/constant'
import { ICON_CMD } from '@/config'

import { FollowButton } from '@/components/Buttons'
import TabBar from '@/components/TabBar'
import TagsBar from '@/containers/unit/TagsBar'

// import { SpaceGrow } from '@/components/Common'
import Sticky from '@/components/Sticky'
import { CommunityHolder } from '@/components/LoadingEffects'
// import CommunityStatesPad from '@/components/CommunityStatesPad'

import ExpandTexts from '../../ExpandTexts'
import SocialList from '../../SocialList'

import SubTitle from './SubTitle'
import SubscribeInfo from './SubscribeInfo'
import TeamList from './TeamList'

import {
  Wrapper,
  ContentWrapper,
  InnerWrapper,
  BannerContentWrapper,
  CommunityWrapper,
  LogoWrapper,
  CommunityLogo,
  CommunityInfo,
  TitleWrapper,
  Title,
  TitleText,
  LogoHolder,
  Divider,
} from '../../styles/digest_view/row_view'

// 没有各种外链接，打赏信息等的官方社区
const NON_STANDARD_COMMUNITIES = [HCN, 'feedback']

const CommunityBrief = ({ content, descExpand }) => {
  return (
    <CommunityWrapper descExpand={descExpand}>
      <LogoWrapper>
        <CommunityLogo
          small={contains(content.raw, NON_STANDARD_COMMUNITIES)}
          nonFill={contains(content.raw, NON_FILL_COMMUNITY)}
          src={content.logo}
          raw={content.raw}
          loading={<CommunityHolder text={content.raw} />}
        />
        <FollowButton
          hasFollowed
          userId="todo"
          onFollow={console.log}
          onUndoFollow={console.log}
          size="tiny"
          noBorderWhenFollowed
        />
      </LogoWrapper>
      <CommunityInfo>
        <TitleWrapper>
          <Title descExpand={descExpand}>
            <TitleText>{content.title}</TitleText>
          </Title>
        </TitleWrapper>
        <SocialList size="small" />
      </CommunityInfo>
    </CommunityWrapper>
  )
}

const RowView = ({ community, descExpand, isHeaderFixed }) => {
  const offsetTop = isHeaderFixed ? 55 : 30

  return (
    <Sticky offsetTop={offsetTop}>
      <Wrapper
        descExpand={descExpand}
        small={contains(community.raw, NON_STANDARD_COMMUNITIES)}
        isHeaderFixed={isHeaderFixed}
      >
        <ContentWrapper>
          <InnerWrapper>
            <BannerContentWrapper descExpand={descExpand}>
              <CommunityBrief content={community} descExpand={descExpand} />
              {/* <ExpandTexts descExpand={descExpand} /> */}
              {/* <Divider /> */}
              <SubscribeInfo />
              <Divider />
              {/* <SubTitle title="团队" num={2} />
              <TeamList /> */}
              <TagsBar thread={THREAD.POST} onSelect={console.log} />
            </BannerContentWrapper>
          </InnerWrapper>
        </ContentWrapper>
      </Wrapper>
    </Sticky>
  )
}

export default React.memo(RowView)
