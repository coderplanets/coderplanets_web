/*
 *
 * Upvote
 *
 */

import { FC, memo } from 'react'

import type { TUser } from '@/spec'
import { buildLog } from '@/utils/logger'

import { UPVOTE_LAYOUT } from '@/constant'
import AnimatedCount from '@/widgets/AnimatedCount'
import AvatarsGroup from '@/widgets/AvatarsGroup'

import UpvoteBtn from './UpvoteBtn'
import {
  Wrapper,
  UpWrapper,
  CountWrapper,
  AvatarsWrapper,
} from './styles/sticker_layout'

/* eslint-disable-next-line */
const log = buildLog('c:Upvote:index')

type TProps = {
  testid?: string
  count?: number
  avatarList?: TUser[]
  viewerHasUpvoted?: boolean
  onAction?: (viewerHasUpvoted: boolean) => void
}

const Upvote: FC<TProps> = ({
  testid = 'upvote',
  count = 0,
  viewerHasUpvoted = false,
  onAction = log,
  avatarList,
}) => {
  return (
    <Wrapper testid={testid}>
      <UpWrapper>
        <UpvoteBtn
          type={UPVOTE_LAYOUT.COMMENT}
          viewerHasUpvoted={viewerHasUpvoted}
          onAction={onAction}
          count={count}
        />
      </UpWrapper>
      <CountWrapper>
        <AnimatedCount count={count} active={viewerHasUpvoted} size="medium" />
      </CountWrapper>

      <AvatarsWrapper count={count}>
        <AvatarsGroup users={avatarList} showMore={false} limit={3} />
      </AvatarsWrapper>
    </Wrapper>
  )
}

export default memo(Upvote)
