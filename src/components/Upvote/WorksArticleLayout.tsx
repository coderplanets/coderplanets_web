/*
 *
 * Upvote
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils'
import { SIZE } from '@/constant'

import AvatarsRow from '@/components/AvatarsRow'
import TotalCount from './TotalCount'

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
  {
    id: '4',
    nickname: 'nickname',
    avatar: 'https://avatars.githubusercontent.com/u/221942?s=64&v=4',
  },
  {
    id: '5',
    nickname: 'nickname',
    avatar: 'https://avatars.githubusercontent.com/u/5580297?s=64&v=4',
  },
  {
    id: '6',
    nickname: 'nickname',
    avatar: 'https://avatars.githubusercontent.com/u/17426470?s=64&v=4',
  },
  {
    id: '7',
    nickname: 'nickname',
    avatar: 'https://avatars.githubusercontent.com/u/221942?s=64&v=4',
  },
]

type TProps = {
  testid?: string
  count?: number
  viewerHasUpvoted?: boolean
  avatarsRowLimit?: number
  alias?: string // 觉得很赞(default), 觉得很酷(works), 学到了(blog), 感兴趣(meetup), 有意思(Radar)
}

const Upvote: FC<TProps> = ({
  testid = 'upvote',
  count = 0,
  viewerHasUpvoted = false,
  avatarsRowLimit = 3,
  alias = '觉得很酷',
}) => {
  const noOne = count === 0

  return (
    <Wrapper testid={testid}>
      <UpWrapper>
        <UpvoteBtn viewerHasUpvoted={viewerHasUpvoted} type="works-article" />
        <CountWrapper>
          <TotalCount count={count} size={SIZE.LARGE} />
        </CountWrapper>
      </UpWrapper>

      <DescWrapper>
        {!noOne && (
          <Avatars>
            <AvatarsRow users={tmpUsers} showMore={false} limit={7} />
          </Avatars>
        )}
        <Desc
          noOne={noOne}
          count={count}
          avatarsRowLimit={avatarsRowLimit}
          alias={alias}
          showCount={false}
        />
      </DescWrapper>
    </Wrapper>
  )
}

export default memo(Upvote)
