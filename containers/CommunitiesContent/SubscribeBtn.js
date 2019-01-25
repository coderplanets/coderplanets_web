import React from 'react'
import { Button, Icon, Tooltip } from 'antd'

// import { ICON_CMD } from 'config'
import { SubscribedBox } from './styles'
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
        <Icon type="check" />
        已关注
      </Button>
    ) : (
      <SubscribedBox>
        <Icon type="check" />
        &nbsp;已关注
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
      <div>
        <Button size="small" type="primary">
          <Icon type="loading" /> 关注
        </Button>
      </div>
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
          <Icon type="plus" />
          关注
        </Button>
      )}
    </div>
  )
}

export default SubscribeBtn
