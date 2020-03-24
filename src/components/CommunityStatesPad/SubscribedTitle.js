import React from 'react'

// import { ICON_CMD } from '@config'
// import { Wrapper } from './styles'
import Tooltip from '@components/Tooltip'
import { NumberTitle } from './styles'
import { PopoverInfo, PopTitle, PopDesc } from './styles/subscribed_title'

const SubscribedBtn = ({ community, onUndoSubscribe }) => {
  if (community.raw === 'home') {
    return (
      <NumberTitle small readOnly>
        已加入
      </NumberTitle>
    )
  }

  return (
    <Tooltip
      placement="bottom"
      content={
        <PopoverInfo>
          <PopTitle>点击可退出</PopTitle>
          <PopDesc>退出后该社区将不会出现在你的左侧列表中</PopDesc>
        </PopoverInfo>
      }
    >
      <NumberTitle onClick={onUndoSubscribe.bind(this, community)} small>
        已加入
      </NumberTitle>
    </Tooltip>
  )
}

const SubscribedTitle = ({ community, onSubscribe, onUndoSubscribe }) => (
  <React.Fragment>
    {community.viewerHasSubscribed ? (
      <SubscribedBtn community={community} onUndoSubscribe={onUndoSubscribe} />
    ) : (
      <Tooltip
        placement="bottom"
        content={
          <PopoverInfo>
            <PopTitle>点击加入</PopTitle>
            <PopDesc>加入后该社区将会出现在你的左侧列表中</PopDesc>
          </PopoverInfo>
        }
      >
        <NumberTitle onClick={onSubscribe.bind(this, community)}>
          加入
        </NumberTitle>
      </Tooltip>
    )}
  </React.Fragment>
)

export default React.memo(SubscribedTitle)
