import React from 'react'

import { ICON_CMD } from '@config'
import Tooltip from '@components/Tooltip'

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
  LogoHolder,
} from './styles/brief_view'

import CardPopover from './CardPopover'
import MainEntries from './MainEntries'

const CommunityLogoHolder = `${ICON_CMD}/community_logo_holder.svg`

const BriefView = ({ community, curRoute }) => (
  <Wrapper>
    <Tooltip
      placement="bottomLeft"
      trigger="hover"
      content={<CardPopover community={community} />}
    >
      <CardWrapper>
        <CommunityWrapper>
          {community.logo ? (
            <CommunityLogo src={community.logo} raw={community.raw} />
          ) : (
            <LogoHolder src={CommunityLogoHolder} />
          )}
          <CommunityInfo>
            <LogoText href="/home/posts">coderplanets</LogoText>
            <CommunityTitle>{community.title}</CommunityTitle>
          </CommunityInfo>
        </CommunityWrapper>
      </CardWrapper>
    </Tooltip>
    <Breadcrumbs>
      <BetaLogo src={`${ICON_CMD}/beta.svg`} />
      <MainEntries curRoute={curRoute} />
    </Breadcrumbs>
  </Wrapper>
)

export default React.memo(BriefView)
