import React from 'react'
import { contains } from 'ramda'

import { ICON_CMD } from '@/config'
import { NON_FILL_COMMUNITY } from '@/constant'

// import { SpaceGrow } from '@/components/Common'
import Sticky from '@/components/Sticky'
import VerifiedSign from '@/components/VerifiedSign'
import { CommunityHolder } from '@/components/LoadingEffects'
// import CommunityStatesPad from '@/components/CommunityStatesPad'

import ExpandTexts from '../../ExpandTexts'
import SocialList from '../../SocialList'

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
  SubTitle,
  LogoHolder,
  Divider,
} from '../../styles/digest_view/row_view'

// import {
//   onSubscribe,
//   onUndoSubscribe,
//   onShowEditorList,
//   onShowSubscriberList,
// } from '../../logic'

const CommunityLogoHolder = `${ICON_CMD}/community_logo_holder.svg`

// 没有各种外链接，打赏信息等的官方社区
const NON_STANDARD_COMMUNITIES = ['home', 'feedback']

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
          {/* <Header community={community} /> */}
          <InnerWrapper>
            <BannerContentWrapper descExpand={descExpand}>
              <CommunityBrief content={community} descExpand={descExpand} />
              <ExpandTexts descExpand={descExpand} />
              <br />
              {/* <Divider /> */}
              <SubscribeInfo />
              <Divider />
              threads
              <Divider />
              tags
              <Divider />
              {/* <SpaceGrow /> */}
              <SubTitle>团队：</SubTitle>
              <TeamList />
              <Divider />
              <SubTitle>技术栈：</SubTitle>
            </BannerContentWrapper>
          </InnerWrapper>
        </ContentWrapper>
      </Wrapper>
    </Sticky>
  )
}

export default React.memo(RowView)
