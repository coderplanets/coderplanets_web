import { FC, memo } from 'react'

import type { TComment } from '@/spec'
// import { ICON_CMD } from '@/config'
// import { Wrapper } from './styles'
import { cutRest } from '@/utils/helper'
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
      <ReplyToBody>{comment.bodyHtml}</ReplyToBody>
      <ReplyToFloor>#{comment.floor}</ReplyToFloor>
    </ReplyBar>
  )
}

export default memo(ReplyToBar)
