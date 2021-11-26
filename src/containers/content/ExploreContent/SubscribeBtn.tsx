import { FC, memo } from 'react'

// import { ICON_CMD } from '@/config'
// import { HCN } from '@/constant'

import type { TCommunity, TID } from '@/spec'

import Button from '@/widgets/Buttons/Button'
import FollowButton from '@/widgets/Buttons/FollowButton'

import { subscribe, unSubscribe } from './logic'

type TProps = {
  subscribing: boolean
  subscribingId: TID
  community: TCommunity
}

const SubscribeBtn: FC<TProps> = ({
  community,
  subscribing,
  subscribingId,
}) => {
  if (subscribing && community.id === subscribingId) {
    return (
      <Button size="tiny" type="primary">
        加入 ..
      </Button>
    )
  }
  return (
    <FollowButton
      size="tiny"
      followText="加 入"
      followingText="已加入"
      hasFollowed={community.viewerHasSubscribed}
      onFollow={() => subscribe(community.id)}
      onUndoFollow={() => unSubscribe(community.id)}
    />
  )
}

export default memo(SubscribeBtn)
