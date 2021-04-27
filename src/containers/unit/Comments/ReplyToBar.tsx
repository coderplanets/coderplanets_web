import React, { FC } from 'react'

import type { TComment } from '@/spec'
// import { ICON_CMD } from '@/config'
// import { Wrapper } from './styles'
import { cutRest } from '@/utils'
import { ReplyBar, ReplyToBody, ReplyToFloor } from './styles/reply_to_bar'

type TProps = {
  comment: TComment
}

const ReplyToBar: FC<TProps> = ({ comment }) => {
  if (!comment) return null
  return (
    <ReplyBar>
      回复&nbsp;
      {cutRest(comment.author.nickname, 10)}:
      <ReplyToBody>{comment.body}</ReplyToBody>
      <ReplyToFloor>#{comment.floor}</ReplyToFloor>
    </ReplyBar>
  )
}

export default React.memo(ReplyToBar)
