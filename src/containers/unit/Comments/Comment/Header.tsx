import React from 'react'
import { forEach, clone, pluck } from 'ramda'

import type { TComment } from '@/spec'

import ImgFallback from '@/components/ImgFallback'
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
} from '../styles/comment/header'

import { previewReply } from '../logic'

const getAuthors = (comment) => {
  /* eslint-disable no-return-assign */
  const replies = forEach((reply) => {
    /* @ts-ignore */
    return (reply.author.extraId = reply.id)
  }, clone(comment.replies))
  /* eslint-enable */

  /* @ts-ignore */
  return pluck('author', replies)
}

type TProps = {
  data: TComment
}

const CommentHeader: React.FC<TProps> = ({ data }) => {
  return (
    <Wrapper>
      <Avatar
        src={data.author.avatar}
        fallback={<ImgFallback user={data.author} size={22} right={10} />}
      />
      <HeaderBaseInfo>
        <CommentHeaderFirst>
          <CommentUserName>
            {data.author.nickname}
            <DotDivider radius={3} space={10} />
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
      </HeaderBaseInfo>
    </Wrapper>
  )
}

export default React.memo(CommentHeader)
