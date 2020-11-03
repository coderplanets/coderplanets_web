import React from 'react'

import { ICON } from '@/config'
import { cutFrom } from '@/utils'

import {
  Wrapper,
  ReplyIcon,
  ReplyToBody,
  ReplyToFloor,
} from '../styles/comment/reply_bar'

const CommentReplyBar = ({ data }) => {
  return (
    <Wrapper>
      <ReplyIcon src={`${ICON}/article/reply.svg`} />
      {cutFrom(data.author.nickname, 6)}:<ReplyToBody>{data.body}</ReplyToBody>
      <ReplyToFloor>#{data.floor}</ReplyToFloor>
    </Wrapper>
  )
}

export default React.memo(CommentReplyBar)
