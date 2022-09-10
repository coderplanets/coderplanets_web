/*
 *
 * CommunityJoinBadge
 *
 */

import { FC } from 'react'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

// import FollowButton from '@/widgets/Buttons/FollowButton'

import { Wrapper, Title, Desc, BottomLine } from './styles'
import type { TStore } from './store'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityJoinBadge')

type TProps = {
  communityJoinBadge?: TStore
  testid?: string
}

const CommunityJoinBadgeContainer: FC<TProps> = ({
  communityJoinBadge: store,
  testid = 'community-join-badge',
}) => {
  useInit(store)

  const { curCommunity } = store
  const { title, desc } = curCommunity

  return (
    <Wrapper testid={testid}>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>

      {/* <FollowButton
        size="tiny"
        followText="加 入"
        followingText="已加入"
        hasFollowed={viewerHasSubscribed}
        // onFollow={() => subscribe(community.id)}
        // onUndoFollow={() => unSubscribe(community.id)}
      /> */}

      <BottomLine />
    </Wrapper>
  )
}

export default bond(
  CommunityJoinBadgeContainer,
  'communityJoinBadge',
) as FC<TProps>
