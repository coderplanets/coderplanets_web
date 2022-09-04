/*
 * CommunityJoinSign
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'

import FollowButton from '@/widgets/Buttons/FollowButton'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:CommunityJoinSign:index')

type TProps = {
  hasFollowed?: boolean
  onFollow?: () => void
  onUndoFollow?: () => void
}

const CommunityJoinSign: FC<TProps> = ({
  hasFollowed = false,
  onFollow = log,
  onUndoFollow = log,
}) => {
  return (
    <Wrapper hasFollowed={hasFollowed}>
      <FollowButton
        followText="&nbsp;加 入&nbsp;"
        followingText="已加入"
        size="tiny"
        hasFollowed={hasFollowed}
        onFollow={onFollow}
        onUndoFollow={onUndoFollow}
      />
    </Wrapper>
  )
}

export default memo(CommunityJoinSign)
