import React from 'react'
import { contains } from 'ramda'

import { ICON_CMD } from '@/config'
import { NON_FILL_COMMUNITY } from '@/constant'

import { SpaceGrow } from '@/components/Common'
import Sticky from '@/components/Sticky'
import VerifiedSign from '@/components/VerifiedSign'
import { CommunityHolder } from '@/components/LoadingEffects'
import IconText from '@/components/IconText'

import ExpandTexts from '../../ExpandTexts'
import SocialList from '../../SocialList'

import Header from './Header'
import TeamList from './TeamList'

import {
  Wrapper,
  InnerWrapper,
  BannerContentWrapper,
  CommunityWrapper,
  CommunityLogo,
  LogoWrapper,
  CommunityInfo,
  TitleWrapper,
  Title,
  TitleText,
  SubTitle,
  LogoHolder,
} from '../../styles/digest_view/row_view'

// import {
//   onSubscribe,
//   onUndoSubscribe,
//   onShowEditorList,
//   onShowSubscriberList,
// } from '../logic'

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
      </CommunityInfo>
    </CommunityWrapper>
  )
}

const RowView = ({ community, descExpand }) => {
  return (
    <Sticky offsetTop={30}>
      <Wrapper
        descExpand={descExpand}
        small={contains(community.raw, NON_STANDARD_COMMUNITIES)}
      >
        <Header />
        <InnerWrapper>
          <BannerContentWrapper descExpand={descExpand}>
            <CommunityBrief content={community} descExpand={descExpand} />
            <IconText iconSrc={`${ICON_CMD}/default_user.svg`}>
              2389 人关注
            </IconText>
            <br />
            <IconText iconSrc={`${ICON_CMD}/view-o.svg`}>89 人在线</IconText>
            <SpaceGrow />
            <SubTitle>团队：</SubTitle>
            <TeamList />
            <SubTitle>联系我们：</SubTitle>
            <SocialList direction="2-column" size="medium" />
          </BannerContentWrapper>
        </InnerWrapper>
      </Wrapper>
    </Sticky>
  )
}

export default React.memo(RowView)
