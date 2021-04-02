import React from 'react'

import type { TComment } from '@/spec'
import { ICON } from '@/config'
import { cutRest } from '@/utils'

import {
  Wrapper,
  ReplyIcon,
  ReplyToBody,
  ReplyToFloor,
} from '../styles/comment/reply_bar'

type TProps = {
  data: TComment
}

const CommentReplyBar: React.FC<TProps> = ({ data }) => {
  return (
    <Wrapper>
      <ReplyIcon src={`${ICON}/article/reply.svg`} />
      {cutRest(data.author.nickname, 6)}:<ReplyToBody>{data.body}</ReplyToBody>
      <ReplyToFloor>#{data.floor}</ReplyToFloor>
    </Wrapper>
  )
}

export default React.memo(CommentReplyBar)
