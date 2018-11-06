import React from 'react'

import Popover from '../Popover'
import { ICON_CMD } from '../../config'

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

const BriefView = ({ curCommunity }) => (
  <Wrapper>
    <Popover
      placement="bottomLeft"
      trigger="hover"
      content={<CardPopover community={curCommunity} />}
    >
      <CardWrapper>
        <CommunityWrapper>
          {curCommunity.logo ? (
            <CommunityLogo src={curCommunity.logo} />
          ) : (
            <LogoHolder src={CommunityLogoHolder} />
          )}
          <CommunityInfo>
            <LogoText>coderplanets</LogoText>
            <CommunityTitle>{curCommunity.title}</CommunityTitle>
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
