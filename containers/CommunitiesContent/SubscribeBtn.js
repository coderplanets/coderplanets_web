import React from 'react'
import { Button, Tooltip } from 'antd'

import { ICON_CMD } from '@config'

import { SubscribedBox, BtnWrapper, PrefixIcon } from './styles'
import { subscribe, unSubscribe } from './logic'

const AlreadySubedBtn = ({ community }) => (
  <Tooltip title="取消关注" mouseEnterDelay={1} placement="bottom">
    {community.raw !== 'home' ? (
      <Button
        size="small"
        type="primary"
        ghost
        onClick={unSubscribe.bind(this, community.id)}
      >
        <BtnWrapper>
          <PrefixIcon src={`${ICON_CMD}/check2.svg`} primary />
          <div>已关注</div>
        </BtnWrapper>
      </Button>
    ) : (
      <SubscribedBox>
        <BtnWrapper>
          <PrefixIcon src={`${ICON_CMD}/check2.svg`} primary />
          <div>&nbsp;已关注</div>
        </BtnWrapper>
      </SubscribedBox>
    )}
  </Tooltip>
)

const SubscribeBtn = ({
  community,
  restProps: { subscribing, subscribingId },
}) => {
  if (subscribing && community.id === subscribingId) {
    return (
      <Button size="small" type="primary">
        关注 ..
      </Button>
    )
  }
  return (
    <div>
      {community.viewerHasSubscribed ? (
        <AlreadySubedBtn community={community} />
      ) : (
        <Button
          size="small"
          type="primary"
          onClick={subscribe.bind(this, community.id)}
        >
          <BtnWrapper>
            <PrefixIcon src={`${ICON_CMD}/plus.svg`} />
            <div>关注</div>
          </BtnWrapper>
        </Button>
      )}
    </div>
  )
}

export default SubscribeBtn
