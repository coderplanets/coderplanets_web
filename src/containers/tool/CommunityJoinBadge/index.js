//

/*
 *
 * CommunityJoinBadge
 *
 */

import React from 'react'
import T from 'prop-types'

import { pluggedIn, buildLog } from '@/utils'

import SubscribeBtn from './SubscribeBtn'

import { Wrapper, Title, Desc, BottomLine } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityJoinBadge')

const CommunityJoinBadgeContainer = ({ communityJoinBadge: store, testId }) => {
  useInit(store)

  const { curCommunity, subscribeLoading } = store
  const { title, desc } = curCommunity

  return (
    <Wrapper testId={testId}>
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

CommunityJoinBadgeContainer.propTypes = {
  communityJoinBadge: T.any.isRequired,
  testId: T.string,
}

CommunityJoinBadgeContainer.defaultProps = {
  testId: 'community-join-badge',
}

export default pluggedIn(CommunityJoinBadgeContainer)
