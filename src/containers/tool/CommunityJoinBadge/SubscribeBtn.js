import React from 'react'

import Button from '@/components/Buttons/Button'

import { Wrapper, Text } from './styles/subscribe_btn'
import { onSubscribe, onCancleSubscribe } from './logic'

const SubscribeButton = ({ community, subscribeLoading }) => {
  const { viewerHasSubscribed } = community

  if (community.raw === 'home') {
    return (
      <Wrapper>
        <Button
          size="tiny"
          type="primary"
          onClick={() => onCancleSubscribe(community)}
          loading={subscribeLoading}
          ghost
        >
          <Text>已加入</Text>
        </Button>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      {viewerHasSubscribed ? (
        <Button
          size="tiny"
          type="primary"
          onClick={() => onCancleSubscribe(community)}
          loading={subscribeLoading}
          ghost
        >
          <Text>已加入</Text>
        </Button>
      ) : (
        <Button
          size="small"
          type="primary"
          onClick={() => onSubscribe(community)}
          loading={subscribeLoading}
        >
          <Text>加入</Text>
        </Button>
      )}
    </Wrapper>
  )
}

export default SubscribeButton
