import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'
import Tooltip from '@/components/Tooltip'

import {
  Wrapper,
  CardWrapper,
  CommunityWrapper,
  CommunityLogo,
  CommunityInfo,
  LogoText,
  CommunityTitle,
  Breadcrumbs,
  LogoHolder,
} from './styles/brief_view'

import CardPopover from './CardPopover'
import MainEntries from './MainEntries/index'

const CommunityLogoHolder = `${ICON_CMD}/community_logo_holder.svg`

const BriefView = ({ community }) => {
  return (
    <Wrapper>
      <CardWrapper>
        <CommunityWrapper>
          {community.logo ? (
            <CommunityLogo src={community.logo} raw={community.raw} />
          ) : (
            <LogoHolder src={CommunityLogoHolder} />
          )}
          <Tooltip
            placement="bottom-start"
            content={<CardPopover community={community} />}
          >
            <CommunityInfo>
              <LogoText href="/home/posts">coderplanets</LogoText>
              <CommunityTitle>{community.title}</CommunityTitle>
            </CommunityInfo>
          </Tooltip>
        </CommunityWrapper>
      </CardWrapper>
      <Breadcrumbs>
        <MainEntries type="brief" />
      </Breadcrumbs>
    </Wrapper>
  )
}

BriefView.propTypes = {
  community: T.object.isRequired,
}

BriefView.defaultProps = {}

export default React.memo(BriefView)
