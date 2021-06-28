/*
 *
 * CommunityJoinBadge
 *
 */

import { FC } from 'react'

import { pluggedIn, buildLog } from '@/utils'

import SubscribeBtn from './SubscribeBtn'

import { Wrapper, Title, Desc, BottomLine } from './styles'
import type { TStore } from './store'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityJoinBadge')

type TProps = {
  communityJoinBadge: TStore
  testid?: string
}

const CommunityJoinBadgeContainer: FC<TProps> = ({
  communityJoinBadge: store,
  testid = 'community-join-badge',
}) => {
  useInit(store)

  const { curCommunity, subscribeLoading } = store
  const { title, desc } = curCommunity

  return (
    <Wrapper testid={testid}>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>

      <SubscribeBtn
        community={curCommunity}
        subscribeLoading={subscribeLoading}
      />

      <BottomLine />
    </Wrapper>
  )
}

export default pluggedIn(CommunityJoinBadgeContainer) as FC<TProps>
