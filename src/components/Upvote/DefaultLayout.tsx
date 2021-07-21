/*
 *
 * Upvote
 *
 */

import { FC, memo } from 'react'

import type { TUser } from '@/spec'
import { buildLog } from '@/utils'

import AvatarsRow from '@/components/AvatarsRow'

import UpvoteBtn from './UpvoteBtn'
import Desc from './Desc'

import { Wrapper } from './styles/default_layout'

/* eslint-disable-next-line */
const log = buildLog('c:Upvote:index')

const tmpUsers = [
  {
    id: '1',
    nickname: 'nickname',
    avatar: 'https://avatars.githubusercontent.com/u/221942?s=64&v=4',
  },
  {
    id: '2',
    nickname: 'nickname',
    avatar: 'https://avatars.githubusercontent.com/u/5580297?s=64&v=4',
  },
  {
    id: '3',
    nickname: 'nickname',
    avatar: 'https://avatars.githubusercontent.com/u/17426470?s=64&v=4',
  },
]

type TProps = {
  testid?: string
  count?: number
  avatarsRowLimit?: number
  viewerHasUpvoted?: boolean
  alias?: string // 觉得很赞(default), 觉得很酷(works), 学到了(blog), 感兴趣(meetup), 有意思(Radar)
  avatarList?: TUser[]
}

const Upvote: FC<TProps> = ({
  testid = 'upvote',
  count = 4,
  viewerHasUpvoted = false,
  avatarsRowLimit = 3,
  alias = '觉得很赞',
}) => {
  const noOne = count === 0

  return (
    <Wrapper testid={testid}>
      <UpvoteBtn viewerHasUpvoted={viewerHasUpvoted} />

      {!noOne && <AvatarsRow users={tmpUsers} showMore={false} />}

      <Desc
        noOne={noOne}
        count={count}
        avatarsRowLimit={avatarsRowLimit}
        alias={alias}
      />
    </Wrapper>
  )
}

export default memo(Upvote)
