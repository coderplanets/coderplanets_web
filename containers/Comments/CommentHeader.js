import React from 'react'
import R from 'ramda'
import TimeAgo from 'timeago-react'

// import { ICON_CMD } from '../../config'
// import { Wrapper } from './styles'

import AvatarsRow from '@components/AvatarsRow'

import {
  Wrapper,
  FloorNum,
  CommentAvatar,
  MobileAvatar,
  HeaderBaseInfo,
  CommentUserName,
  TimeStamps,
  CommentHeaderFirst,
  ReplyUsers,
  ReplyTitle,
} from './styles/comment_header'

import { previewReply } from './logic'

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
    <MobileAvatar>
      <CommentAvatar src={data.author.avatar} />
    </MobileAvatar>
    <HeaderBaseInfo>
      <CommentHeaderFirst>
        <CommentUserName>
          {data.author.nickname}
          <FloorNum>#{data.floor}</FloorNum>
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
      <TimeStamps>
        <TimeAgo datetime={data.insertedAt} locale="zh_CN" />
      </TimeStamps>
    </HeaderBaseInfo>
  </Wrapper>
)

export default CommentHeader
