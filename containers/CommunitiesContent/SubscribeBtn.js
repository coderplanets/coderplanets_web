import React from 'react'
import { Button } from 'antd'

import { ICON_CMD } from '@config'

import Tooltip from '@components/Tooltip'
import Hinter from './Hinter'

import { SubscribedBox, BtnWrapper, PrefixIcon } from './styles'
import { subscribe, unSubscribe } from './logic'

const AlreadySubedBtn = ({ community }) => (
  <React.Fragment>
    {community.raw !== 'home' ? (
      <Tooltip
        content={
          <Hinter
            title="取消关注"
            desc="之后该社区将不会出现在左侧订阅列表中"
          />
        }
        animation="perspective"
        delay={1000}
      >
        <div>
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
        </div>
      </Tooltip>
    ) : (
      <SubscribedBox>
        <BtnWrapper>
          <PrefixIcon src={`${ICON_CMD}/check2.svg`} primary />
          <div>&nbsp;已关注</div>
        </BtnWrapper>
      </SubscribedBox>
    )}
  </React.Fragment>
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
    <React.Fragment>
      {community.viewerHasSubscribed ? (
        <AlreadySubedBtn community={community} />
      ) : (
        <Tooltip
          content={
            <Hinter title="关注" desc="之后该社区将会出现在左侧订阅列表中" />
          }
          animation="perspective"
          delay={1000}
        >
          <div>
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
          </div>
        </Tooltip>
      )}
    </React.Fragment>
  )
}

export default SubscribeBtn
