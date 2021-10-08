import { FC, memo } from 'react'

// import { ICON_CMD } from '@/config'
// import { HCN } from '@/constant'

import type { TCommunity, TID } from '@/spec'

import Button from '@/components/Buttons/Button'
import FollowButton from '@/components/Buttons/FollowButton'

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
      <Button size="small" type="primary">
        加入 ..
      </Button>
    )
  }
  return (
    <FollowButton
      followText="加 入"
      followingText="已加入"
      hasFollowed={community.viewerHasSubscribed}
      onFollow={() => subscribe(community.id)}
      onUndoFollow={() => unSubscribe(community.id)}
    />
  )
}

export default memo(SubscribeBtn)
