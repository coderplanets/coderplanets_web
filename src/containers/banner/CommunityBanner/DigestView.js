import React from 'react'
import { contains } from 'ramda'

import { ICON_CMD } from '@/config'
import { NON_FILL_COMMUNITY } from '@/constant'

import VerifiedSign from '@/components/VerifiedSign'
import Tabber from '@/components/Tabber'
import CommunityStatesPad from '@/components/CommunityStatesPad'
import { CommunityHolder } from '@/components/LoadingEffects'

import ExpandTexts from './ExpandTexts'
import SocialList from './SocialList'

import {
  Wrapper,
  InnerWrapper,
  BannerContentWrapper,
  TabberWrapper,
  CommunityWrapper,
  CommunityLogo,
  LogoWrapper,
  CommunityInfo,
  TitleWrapper,
  Title,
  TitleText,
  LogoHolder,
} from './styles/digest_view'

import {
  tabberChange,
  onSubscribe,
  onUndoSubscribe,
  onShowEditorList,
  onShowSubscriberList,
} from './logic'

const CommunityLogoHolder = `${ICON_CMD}/community_logo_holder.svg`

// 没有各种外链接，打赏信息等的官方社区
const NON_STANDARD_COMMUNITIES = ['home', 'feedback']

const CommunityBrief = ({ content, descExpand }) => {
  return (
    <CommunityWrapper descExpand={descExpand}>
      <LogoWrapper raw={content.raw}>
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
      </LogoWrapper>
      <CommunityInfo>
        <TitleWrapper>
          <Title descExpand={descExpand}>
            <TitleText>{content.title}</TitleText>
            <VerifiedSign />
          </Title>
        </TitleWrapper>
        {/* <Desc>{content.desc}</Desc> */}
        <ExpandTexts descExpand={descExpand} />
        {content.raw !== 'home' && <SocialList />}
      </CommunityInfo>
    </CommunityWrapper>
  )
}

const DigestView = ({ community, descExpand, activeThread, layout }) => {
  return (
    <Wrapper
      descExpand={descExpand}
      small={contains(community.raw, NON_STANDARD_COMMUNITIES)}
    >
      <InnerWrapper>
        <BannerContentWrapper descExpand={descExpand}>
          <CommunityBrief content={community} descExpand={descExpand} />
          <CommunityStatesPad
            community={community}
            onSubscribe={onSubscribe}
            onUndoSubscribe={onUndoSubscribe}
            onShowEditorList={onShowEditorList}
            onShowSubscriberList={onShowSubscriberList}
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
      </InnerWrapper>
    </Wrapper>
  )
}

export default React.memo(DigestView)
