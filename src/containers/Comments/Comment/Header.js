import React from 'react'
import R from 'ramda'
import TimeAgo from 'timeago-react'

import AvatarsRow from '@components/AvatarsRow'
import DotDivider from '@components/DotDivider'

import {
  Wrapper,
  FloorNum,
  Avatar,
  HeaderBaseInfo,
  CommentUserName,
  TimeStamps,
  CommentHeaderFirst,
  ReplyUsers,
  ReplyTitle,
} from './styles/header'

import { previewReply } from '../logic'

const getAuthors = comment => {
  /* eslint-disable no-return-assign */
  const replies = R.forEach(reply => {
    return (reply.author.extra_id = reply.id)
  }, R.clone(comment.replies))
  /* eslint-enable */

  return R.pluck('author', replies)
}

const CommentHeader = ({ data }) => (
  <Wrapper>
    <Avatar src={data.author.avatar} />
    <HeaderBaseInfo>
      <CommentHeaderFirst>
        <CommentUserName>
          {data.author.nickname}
          <DotDivider radius="3px" space="10px" />
          <FloorNum>{data.floor}F</FloorNum>
        </CommentUserName>
        {data.repliesCount !== 0 && (
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
      {/* <TimeStamps>
        <TimeAgo datetime={data.insertedAt} locale="zh_CN" />
      </TimeStamps> */}
    </HeaderBaseInfo>
  </Wrapper>
)

export default CommentHeader
