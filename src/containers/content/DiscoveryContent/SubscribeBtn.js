import React from 'react'

import { ICON_CMD } from '@/config'

import { Button } from '@/components/Buttons'
import Tooltip from '@/components/Tooltip'
import Hinter from './Hinter'

import { SubscribedBox, BtnWrapper, PrefixIcon } from './styles'
import { subscribe, unSubscribe } from './logic'

const AlreadySubedBtn = ({ community }) => (
  <>
    {community.raw !== 'home' ? (
      <Tooltip
        content={
          <Hinter title="退出" desc="之后该社区将不会出现在左侧订阅列表中" />
        }
        animation="perspective"
        delay={1000}
      >
        <div>
          <Button
            size="small"
            type="primary"
            ghost
            onClick={() => unSubscribe(community.id)}
          >
            <BtnWrapper>
              <PrefixIcon src={`${ICON_CMD}/check2.svg`} primary />
              <div>已加入</div>
            </BtnWrapper>
          </Button>
        </div>
      </Tooltip>
    ) : (
      <SubscribedBox>
        <BtnWrapper>
          <PrefixIcon src={`${ICON_CMD}/check2.svg`} primary />
          <div>&nbsp;已加入</div>
        </BtnWrapper>
      </SubscribedBox>
    )}
  </>
)

const SubscribeBtn = ({
  community,
  restProps: { subscribing, subscribingId },
}) => {
  if (subscribing && community.id === subscribingId) {
    return (
      <Button size="small" type="primary">
        加入 ..
      </Button>
    )
  }
  return (
    <>
      {community.viewerHasSubscribed ? (
        <AlreadySubedBtn community={community} />
      ) : (
        <Tooltip
          content={
            <Hinter title="加入" desc="之后该社区将会出现在左侧订阅列表中" />
          }
          animation="perspective"
          delay={1000}
        >
          <div>
            <Button
              size="small"
              type="primary"
              onClick={() => subscribe(community.id)}
            >
              <BtnWrapper>
                <PrefixIcon src={`${ICON_CMD}/plus.svg`} />
                <div>加入</div>
              </BtnWrapper>
            </Button>
          </div>
        </Tooltip>
      )}
    </>
  )
}

export default React.memo(SubscribeBtn)
