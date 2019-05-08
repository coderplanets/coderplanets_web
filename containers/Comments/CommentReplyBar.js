import React from 'react'

import { cutFrom } from '@utils'
import { ReplyBar, ReplyToBody, ReplyToFloor } from './styles/comment_reply_bar'

const CommentReplyBar = ({ data }) => (
  <ReplyBar>
    回复&nbsp;
    {cutFrom(data.author.nickname, 10)}:<ReplyToBody>{data.body}</ReplyToBody>
    <ReplyToFloor>#{data.floor}</ReplyToFloor>
  </ReplyBar>
)

export default CommentReplyBar
