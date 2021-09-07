import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'

import FollowButton from '@/components/Buttons/FollowButton'

import {
  Wrapper,
  Icon,
  Name,
  JoinDesc,
} from '../../styles/desktop_view/post_layout/original_community'

type TProps = {
  community: TCommunity
}

const OriginalCommunity: FC<TProps> = ({ community }) => {
  return (
    <Wrapper>
      <Icon src={community.logo} />
      <Name>{community.title}</Name>
      <JoinDesc>{community.subscribersCount} 人加入</JoinDesc>
      <FollowButton size="tiny" fakeLoading />
    </Wrapper>
  )
}

export default memo(OriginalCommunity)
