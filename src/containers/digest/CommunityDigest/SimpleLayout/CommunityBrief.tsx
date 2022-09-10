import { FC, memo } from 'react'
import { contains } from 'ramda'

import type { TCommunity } from '@/spec'
import { ICON_CMD } from '@/config'
import { NON_FILL_COMMUNITY } from '@/constant'

// import CommunityJoinSign from '@/widgets/CommunityJoinSign'

import {
  Wrapper,
  Logo,
  LogoWrapper,
  CommunityInfo,
  TitleWrapper,
  Title,
  TitleText,
  LogoHolder,
} from '../styles/simple_layout/community_brief'
// import { subscribeCommunity, unsubscribeCommunity } from '../logic'

const CommunityLogoHolder = `${ICON_CMD}/community_logo_holder.svg`

type TProps = {
  community: TCommunity
}

const CommunityBrief: FC<TProps> = ({ community }) => {
  return (
    <Wrapper>
      <LogoWrapper>
        {community.logo ? (
          <Logo
            noFill={contains(community.raw, NON_FILL_COMMUNITY)}
            src={community.logo}
            raw={community.raw}
          />
        ) : (
          <LogoHolder src={CommunityLogoHolder} />
        )}
      </LogoWrapper>
      <CommunityInfo>
        <TitleWrapper>
          <Title>
            <TitleText>{community.title}</TitleText>
          </Title>
        </TitleWrapper>
      </CommunityInfo>
    </Wrapper>
  )
}

export default memo(CommunityBrief)
