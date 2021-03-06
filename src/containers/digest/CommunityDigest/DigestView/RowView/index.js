import React from 'react'
import { contains } from 'ramda'

import { HCN, THREAD, NON_FILL_COMMUNITY, VIEW } from '@/constant'
import { ICON_CMD } from '@/config'

import CustomScroller from '@/components/CustomScroller'
import TabBar from '@/components/TabBar'
import TagsBar from '@/containers/unit/TagsBar'

// import { SpaceGrow } from '@/components/Common'
import Sticky from '@/components/Sticky'
import VerifiedSign from '@/components/VerifiedSign'
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
  CommunityLogo,
  CommunityInfo,
  TitleWrapper,
  Title,
  TitleText,
  LogoHolder,
  Divider,
  TabBarWrapper,
} from '../../styles/digest_view/row_view'

import { tabOnChange } from '../../logic'

// import {
//   onShowEditorList,
//   onShowSubscriberList,
// } from '../../logic'

const CommunityLogoHolder = `${ICON_CMD}/community_logo_holder.svg`

// 没有各种外链接，打赏信息等的官方社区
const NON_STANDARD_COMMUNITIES = [HCN, 'feedback']

const CommunityBrief = ({ content, descExpand }) => {
  return (
    <CommunityWrapper descExpand={descExpand}>
      {content.logo ? (
        <CommunityLogo
          small={contains(content.raw, NON_STANDARD_COMMUNITIES)}
          nonFill={contains(content.raw, NON_FILL_COMMUNITY)}
          src={content.logo}
          raw={content.raw}
          loading={<CommunityHolder text={content.raw} />}
        />
      ) : (
        <LogoHolder src={CommunityLogoHolder} />
      )}
      <CommunityInfo>
        <TitleWrapper>
          <Title descExpand={descExpand}>
            <TitleText>{content.title}</TitleText>
            <VerifiedSign />
          </Title>
        </TitleWrapper>
        <SocialList size="small" />
      </CommunityInfo>
    </CommunityWrapper>
  )
}

const RowView = ({ community, descExpand, isHeaderFixed, activeThread }) => {
  const offsetTop = isHeaderFixed ? 55 : 30

  return (
    <Sticky offsetTop={offsetTop}>
      <Wrapper
        descExpand={descExpand}
        small={contains(community.raw, NON_STANDARD_COMMUNITIES)}
        isHeaderFixed={isHeaderFixed}
      >
        <CustomScroller
          direction="vertical"
          height="100%"
          showShadow={false}
          showOnHover
        >
          <ContentWrapper>
            <InnerWrapper>
              <BannerContentWrapper descExpand={descExpand}>
                <CommunityBrief content={community} descExpand={descExpand} />
                <ExpandTexts descExpand={descExpand} />
                <Divider />
                <SubscribeInfo />
                <Divider />
                <TabBarWrapper>
                  <TabBar
                    view={VIEW.COMMUNITY_CARD}
                    source={community.threads}
                    onChange={tabOnChange}
                    active={activeThread}
                    communityRaw={community.raw}
                  />
                </TabBarWrapper>
                <Divider />
                <TagsBar
                  view={VIEW.COMMUNITY_CARD}
                  thread={THREAD.POST}
                  onSelect={console.log}
                  // active={activeTagData}
                />
                <Divider />
                {/* <SpaceGrow /> */}
                <SubTitle title="团队" num={2} />
                <TeamList />
                <Divider />
                <SubTitle title="技术栈" num={2} />
              </BannerContentWrapper>
            </InnerWrapper>
          </ContentWrapper>
        </CustomScroller>
      </Wrapper>
    </Sticky>
  )
}

export default React.memo(RowView)
