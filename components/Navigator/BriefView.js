import React from 'react'

import { ICON_CMD } from 'config'
import Popover from 'components/Popover'

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

const BriefView = ({ community }) => (
  <Wrapper>
    <Popover
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
            <LogoText>coderplanets</LogoText>
            <CommunityTitle>{community.title}</CommunityTitle>
          </CommunityInfo>
        </CommunityWrapper>
      </CardWrapper>
    </Popover>
    <Breadcrumbs>
      <BetaLogo src={`${ICON_CMD}/beta.svg`} />
      <MainEntries />
    </Breadcrumbs>
  </Wrapper>
)

export default BriefView
