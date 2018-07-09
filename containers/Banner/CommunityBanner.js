import React from 'react'

import { prettyNum } from '../../utils'
import { DEFAULT_ICON } from '../../config/assets'

import Tabber from '../../components/Tabber'
import * as logic from './logic'

import {
  NumbersWrapper,
  NumberSection,
  NumberDivider,
  NumberTitle,
  NumberItem,
} from './styles'

import {
  BannerContainer,
  BannerContentWrapper,
  TabberWrapper,
  CommunityWrapper,
  CommunityLogo,
  CommunityInfo,
  Title,
  Desc,
} from './styles/community_banner'

const NumbersInfo = ({
  content: { subscribersCount, editorsCount, postsCount },
}) => (
  <NumbersWrapper>
    <NumberSection>
      <NumberTitle>关注</NumberTitle>
      <NumberItem>{prettyNum(subscribersCount)}</NumberItem>
    </NumberSection>
    <NumberDivider />
    <NumberSection>
      <NumberTitle>内容</NumberTitle>
      <NumberItem>{prettyNum(postsCount)}</NumberItem>
    </NumberSection>
    <NumberDivider />
    <NumberSection>
      <NumberTitle>编辑</NumberTitle>
      <NumberItem>{prettyNum(editorsCount)}</NumberItem>
    </NumberSection>
  </NumbersWrapper>
)

const CommunityBrief = ({ content }) => (
  <CommunityWrapper>
    {content.logo ? (
      <CommunityLogo src={content.logo || DEFAULT_ICON} />
    ) : (
      <div />
    )}
    <CommunityInfo>
      <Title>{content.title}</Title>
      <Desc>{content.desc}</Desc>
    </CommunityInfo>
  </CommunityWrapper>
)

const CommunityBanner = ({ viewing: { community, activeThread } }) => (
  <BannerContainer>
    <BannerContentWrapper>
      <CommunityBrief content={community} />
      <NumbersInfo content={community} />
      <TabberWrapper>
        <Tabber
          source={community.threads}
          onChange={logic.tabberChange}
          active={activeThread}
        />
      </TabberWrapper>
    </BannerContentWrapper>
  </BannerContainer>
)

export default CommunityBanner
