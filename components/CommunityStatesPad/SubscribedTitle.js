import React from 'react'

// import { ICON_CMD } from 'config'
// import { Wrapper } from './styles'
import Popover from 'components/Popover'
import { NumberTitle } from './styles'
import { PopoverInfo, PopTitle, PopDesc } from './styles/subscribed_title'

const SubscribedBtn = ({ community, onUndoSubscribe }) => {
  if (community.raw === 'home') {
    return (
      <NumberTitle small readOnly>
        已关注
      </NumberTitle>
    )
  }

  return (
    <Popover
      placement="bottom"
      trigger="hover"
      content={
        <PopoverInfo>
          <PopTitle>点击可取消关注</PopTitle>
          <PopDesc>取消关注后该社区将不会出现在你的左侧列表中</PopDesc>
        </PopoverInfo>
      }
    >
      <NumberTitle onClick={onUndoSubscribe.bind(this, community)} small>
        已关注
      </NumberTitle>
    </Popover>
  )
}

const SubscribedTitle = ({ community, onSubscribe, onUndoSubscribe }) => (
  <React.Fragment>
    {community.viewerHasSubscribed ? (
      <SubscribedBtn community={community} onUndoSubscribe={onUndoSubscribe} />
    ) : (
      <Popover
        placement="bottom"
        trigger="hover"
        content={
          <PopoverInfo>
            <PopTitle>点击可关注</PopTitle>
            <PopDesc>关注后该社区将会出现在你的左侧列表中</PopDesc>
          </PopoverInfo>
        }
      >
        <NumberTitle onClick={onSubscribe.bind(this, community)}>
          关注
        </NumberTitle>
      </Popover>
    )}
  </React.Fragment>
)

export default SubscribedTitle
