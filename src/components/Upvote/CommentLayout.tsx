/*
 *
 * Upvote
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils'

import TotalCount from './TotalCount'
import UpvoteBtn from './UpvoteBtn'

import { Wrapper, UpWrapper, CountWrapper } from './styles/comment_layout'

/* eslint-disable-next-line */
const log = buildLog('c:Upvote:index')

type TProps = {
  testid?: string
  count?: number
  viewerHasUpvoted?: boolean
  alias?: string // 觉得很赞(default), 觉得很酷(works), 学到了(blog), 感兴趣(meetup), 有意思(Radar)
}

const Upvote: FC<TProps> = ({
  testid = 'upvote',
  count = 0,
  viewerHasUpvoted = false,
  alias = '觉得很赞',
}) => {
  return (
    <Wrapper testid={testid}>
      <UpWrapper>
        <UpvoteBtn viewerHasUpvoted={viewerHasUpvoted} />
      </UpWrapper>
      <CountWrapper>
        <TotalCount count={count} />
      </CountWrapper>
    </Wrapper>
  )
}

export default memo(Upvote)
