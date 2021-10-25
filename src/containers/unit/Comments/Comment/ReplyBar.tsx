import { FC, memo } from 'react'

import type { TComment } from '@/spec'
import { ICON } from '@/config'
import { cutRest } from '@/utils/helper'

import { SpaceGrow } from '@/widgets/Common'
import {
  Wrapper,
  ReplyIcon,
  Avatar,
  ReplyToBody,
  ReplyToFloor,
} from '../styles/comment/reply_bar'

type TProps = {
  data: TComment
}

const CommentReplyBar: FC<TProps> = ({ data }) => {
  return (
    <Wrapper>
      <ReplyIcon src={`${ICON}/article/reply.svg`} />
      <Avatar src={data.author.avatar} />
      {cutRest(data.author.nickname, 20)}:
      <ReplyToBody
        dangerouslySetInnerHTML={{
          __html: data.bodyHtml,
        }}
      />
      <SpaceGrow />
      <ReplyToFloor>#{data.floor}</ReplyToFloor>
    </Wrapper>
  )
}

export default memo(CommentReplyBar)
