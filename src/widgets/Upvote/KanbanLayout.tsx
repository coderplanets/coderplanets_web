/*
 *
 * Upvote
 *
 */

import { FC, memo } from 'react'
import { isMobile } from 'react-device-detect'

import type { TUser } from '@/spec'
import { buildLog } from '@/utils/logger'

import { Space } from '@/widgets/Common'
import Facepile from '@/widgets/Facepile'

import UpvoteBtn from './UpvoteBtn'

import {
  Wrapper,
  UpvoteBtnWrapper,
  Count,
  LineDivider,
} from './styles/kanban_layout'

/* eslint-disable-next-line */
const log = buildLog('w:Upvote:index')

type TProps = {
  testid?: string
  count?: number
  viewerHasUpvoted?: boolean
  avatarList?: TUser[]
  onAction?: (viewerHasUpvoted: boolean) => void
}

const Upvote: FC<TProps> = ({
  testid = 'upvote',
  count = 4,
  viewerHasUpvoted = false,
  onAction = log,
  avatarList,
}) => {
  const noOne = count === 0

  return (
    <Wrapper testid={testid}>
      <UpvoteBtnWrapper>
        <UpvoteBtn
          viewerHasUpvoted={viewerHasUpvoted}
          onAction={onAction}
          count={count}
        />
      </UpvoteBtnWrapper>

      <Space right={3} />
      <Count noOne={noOne}>{count}</Count>
      {!noOne && <LineDivider />}
      {!noOne && !isMobile && <Facepile users={avatarList} showMore />}
    </Wrapper>
  )
}

export default memo(Upvote)
