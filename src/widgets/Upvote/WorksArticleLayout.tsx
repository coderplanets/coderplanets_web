/*
 *
 * Upvote
 *
 */

import { FC, memo } from 'react'

import type { TUser } from '@/spec'
import { buildLog } from '@/utils/logger'
import { SIZE, UPVOTE_LAYOUT } from '@/constant'

import Facepile from '@/widgets/Facepile'
import AnimatedCount from '@/widgets/AnimatedCount'

import Desc from './Desc'
import UpvoteBtn from './UpvoteBtn'

import {
  Wrapper,
  UpWrapper,
  Avatars,
  DescWrapper,
  CountWrapper,
} from './styles/works_article_layout'

/* eslint-disable-next-line */
const log = buildLog('w:Upvote:index')

type TProps = {
  testid?: string
  count?: number
  viewerHasUpvoted?: boolean
  avatarsRowLimit?: number
  alias?: string // 觉得很赞(default), 觉得很酷(works), 学到了(blog), 感兴趣(meetup), 有意思(Radar)
  avatarList?: TUser[]
  onAction?: (viewerHasUpvoted: boolean) => void
}

const Upvote: FC<TProps> = ({
  testid = 'upvote',
  count = 0,
  viewerHasUpvoted = false,
  avatarsRowLimit = 3,
  alias = '觉得很酷',
  avatarList,
  onAction = log,
}) => {
  const noOne = count === 0

  return (
    <Wrapper testid={testid}>
      <UpWrapper>
        <UpvoteBtn
          viewerHasUpvoted={viewerHasUpvoted}
          type={UPVOTE_LAYOUT.WORKS_ARTICLE}
          onAction={onAction}
          count={count}
        />
        <CountWrapper>
          <AnimatedCount
            count={count}
            size={SIZE.LARGE}
            active={viewerHasUpvoted}
          />
        </CountWrapper>
      </UpWrapper>

      <DescWrapper>
        {!noOne && (
          <Avatars>
            <Facepile
              users={avatarList}
              showMore={false}
              limit={7}
              popCardPlacement="bottom"
            />
          </Avatars>
        )}
        <Desc
          noOne={noOne}
          count={count}
          avatarsRowLimit={avatarsRowLimit}
          alias={alias}
        />
      </DescWrapper>
    </Wrapper>
  )
}

export default memo(Upvote)
