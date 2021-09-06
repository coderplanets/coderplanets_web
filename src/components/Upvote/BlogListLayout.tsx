/*
 *
 * Upvote
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'

import AnimatedCount from '@/components/AnimatedCount'
import UpvoteBtn from './UpvoteBtn'

import { Wrapper, UpWrapper, CountWrapper } from './styles/blog_list_layout'

/* eslint-disable-next-line */
const log = buildLog('c:Upvote:index')

type TProps = {
  testid?: string
  count?: number
  viewerHasUpvoted?: boolean
}

const Upvote: FC<TProps> = ({
  testid = 'upvote',
  count = 0,
  viewerHasUpvoted = false,
}) => {
  return (
    <Wrapper testid={testid}>
      <UpWrapper>
        <UpvoteBtn viewerHasUpvoted={viewerHasUpvoted} />
      </UpWrapper>
      <CountWrapper>
        <AnimatedCount count={count} />
      </CountWrapper>
    </Wrapper>
  )
}

export default memo(Upvote)