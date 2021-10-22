import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'
import { HCN } from '@/constant'

import FollowButton from '@/widgets/Buttons/FollowButton'

import {
  Wrapper,
  HomeLogo,
  Icon,
  Name,
  JoinDesc,
} from '../../styles/desktop_view/post_layout/original_community'

type TProps = {
  community: TCommunity
}

const OriginalCommunity: FC<TProps> = ({ community }) => {
  const hasFollowed = true

  return (
    <Wrapper>
      {community.raw === HCN ? <HomeLogo /> : <Icon src={community.logo} />}
      <Name>{community.title}</Name>
      <JoinDesc>{community.subscribersCount} 人加入</JoinDesc>
      <FollowButton
        size="tiny"
        hasFollowed={hasFollowed}
        followingOffset={-6}
      />
    </Wrapper>
  )
}

export default memo(OriginalCommunity)
