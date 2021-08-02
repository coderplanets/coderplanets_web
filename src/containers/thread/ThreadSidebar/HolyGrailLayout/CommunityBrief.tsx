import { FC, memo } from 'react'
import { contains } from 'ramda'

import type { TCommunity } from '@/spec'
import { NON_FILL_COMMUNITY } from '@/constant'

import FollowButton from '@/components/Buttons/FollowButton'
import SocialList from '@/components/SocialList'

import {
  Wrapper,
  Header,
  Logo,
  CommunityInfo,
  TitleWrapper,
  TitleText,
} from '../styles/holy_grail_layout/community_brief'

type TProps = {
  community: TCommunity
}

const CommunityBrief: FC<TProps> = ({ community }) => {
  return (
    <Wrapper>
      <Header>
        <Logo
          noFill={contains(community.raw, NON_FILL_COMMUNITY)}
          src={community.logo}
          raw={community.raw}
        />
        <FollowButton
          hasFollowed
          userId="todo"
          onFollow={console.log}
          onUndoFollow={console.log}
          size="tiny"
        />
      </Header>
      <CommunityInfo>
        <TitleWrapper>
          <TitleText>{community.title}</TitleText>
        </TitleWrapper>
        <SocialList size="small" />
      </CommunityInfo>
    </Wrapper>
  )
}

export default memo(CommunityBrief)
