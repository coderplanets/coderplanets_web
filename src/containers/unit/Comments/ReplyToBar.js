import React from 'react'

// import { ICON_CMD } from '@/config'
// import { Wrapper } from './styles'
import { cutFrom } from '@/utils'
import { ReplyBar, ReplyToBody, ReplyToFloor } from './styles/reply_to_bar'

const ReplyToBar = ({ comment }) => {
  if (!comment) return null
  return (
    <ReplyBar>
      回复&nbsp;
      {cutFrom(comment.author.nickname, 10)}:
      <ReplyToBody>{comment.body}</ReplyToBody>
      <ReplyToFloor>#{comment.floor}</ReplyToFloor>
    </ReplyBar>
  )
}

export default React.memo(ReplyToBar)
