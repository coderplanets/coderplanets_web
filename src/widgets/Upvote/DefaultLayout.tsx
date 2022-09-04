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
import Desc from './Desc'

import {
  Wrapper,
  UpvoteBtnWrapper,
  Count,
  LineDivider,
} from './styles/default_layout'

/* eslint-disable-next-line */
const log = buildLog('w:Upvote:index')

type TProps = {
  testid?: string
  count?: number
  avatarsRowLimit?: number
  viewerHasUpvoted?: boolean
  alias?: string // 觉得很赞(default), 觉得很酷(works), 学到了(blog), 感兴趣(meetup), 有意思(Radar)
  avatarList?: TUser[]
  onAction?: (viewerHasUpvoted: boolean) => void
}

const Upvote: FC<TProps> = ({
  testid = 'upvote',
  count = 4,
  viewerHasUpvoted = false,
  avatarsRowLimit = 3,
  alias = '觉得很赞',
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
      {!noOne && !isMobile && <Facepile users={avatarList} showMore={false} />}
      {!noOne && (
        <Desc
          noOne={noOne}
          count={count}
          avatarsRowLimit={avatarsRowLimit}
          alias={alias}
        />
      )}
    </Wrapper>
  )
}

export default memo(Upvote)
