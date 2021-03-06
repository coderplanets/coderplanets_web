//

/*
 *
 * CommunityJoinBadge
 *
 */

import React from 'react'
import T from 'prop-types'

import { pluggedIn, buildLog } from '@/utils'
import Button from '@/components/Buttons/Button'

import { Wrapper, Title, Desc, BtnWrapper, BottomLine, BtnText } from './styles'
import { useInit, onSubscribe, onUndoSubscribe } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityJoinBadge')

const CommunityJoinBadgeContainer = ({ communityJoinBadge: store, testId }) => {
  useInit(store)

  const { curCommunity, subscribeLoading } = store
  const { title, desc, viewerHasSubscribed } = curCommunity

  return (
    <Wrapper testId={testId}>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>

      <BtnWrapper>
        {viewerHasSubscribed ? (
          <Button
            size="tiny"
            type="primary"
            onClick={() => onUndoSubscribe(curCommunity)}
            loading={subscribeLoading}
            ghost
          >
            <BtnText>已加入</BtnText>
          </Button>
        ) : (
          <Button
            size="small"
            type="primary"
            onClick={() => onSubscribe(curCommunity)}
            loading={subscribeLoading}
          >
            <BtnText>加入</BtnText>
          </Button>
        )}
      </BtnWrapper>
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
