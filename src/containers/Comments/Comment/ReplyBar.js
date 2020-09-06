import React from 'react'

import { cutFrom } from '@/utils'
import { Wrapper, Label, ReplyToBody, ReplyToFloor } from './styles/reply_bar'

const CommentReplyBar = ({ data }) => {
  return (
    <Wrapper>
      <Label>回复&nbsp;</Label>
      {cutFrom(data.author.nickname, 10)}:<ReplyToBody>{data.body}</ReplyToBody>
      <ReplyToFloor>#{data.floor}</ReplyToFloor>
    </Wrapper>
  )
}

export default React.memo(CommentReplyBar)
