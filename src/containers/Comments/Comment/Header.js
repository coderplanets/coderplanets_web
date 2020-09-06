import React from 'react'
import { forEach, clone, pluck } from 'ramda'

import { useMedia } from '@/hooks'
import AvatarsRow from '@/components/AvatarsRow'
import DotDivider from '@/components/DotDivider'

import {
  Wrapper,
  FloorNum,
  Avatar,
  HeaderBaseInfo,
  CommentUserName,
  CommentHeaderFirst,
  ReplyUsers,
  ReplyTitle,
} from './styles/header'

import { previewReply } from '../logic'

const getAuthors = (comment) => {
  /* eslint-disable no-return-assign */
  const replies = forEach((reply) => {
    return (reply.author.extra_id = reply.id)
  }, clone(comment.replies))
  /* eslint-enable */

  return pluck('author', replies)
}

const CommentHeader = ({ data }) => {
  const { mobile } = useMedia()

  return (
    <Wrapper>
      <Avatar src={data.author.avatar} />
      <HeaderBaseInfo>
        <CommentHeaderFirst>
          <CommentUserName>
            {data.author.nickname}
            <DotDivider radius="3px" space="10px" />
            <FloorNum>{data.floor}f</FloorNum>
          </CommentUserName>
          {!mobile && data.repliesCount !== 0 && (
            <ReplyUsers>
              <ReplyTitle>收到回复:</ReplyTitle>
              <AvatarsRow
                users={getAuthors(data)}
                onUserSelect={previewReply}
                total={data.repliesCount}
              />
            </ReplyUsers>
          )}
        </CommentHeaderFirst>
      </HeaderBaseInfo>
    </Wrapper>
  )
}

export default React.memo(CommentHeader)
