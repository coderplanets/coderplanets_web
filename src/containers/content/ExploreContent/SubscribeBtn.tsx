import { FC, memo } from 'react'

// import { ICON_CMD } from '@/config'
// import { HCN } from '@/constant'

import type { TCommunity, TID } from '@/spec'

import FollowButton from '@/widgets/Buttons/FollowButton'

import { subscribe, unSubscribe } from './logic'

type TProps = {
  community: TCommunity
}

const SubscribeBtn: FC<TProps> = ({ community }) => {
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
