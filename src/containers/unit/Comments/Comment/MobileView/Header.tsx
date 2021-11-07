import { FC, memo } from 'react'

import type { TComment } from '@/spec'
import ImgFallback from '@/widgets/ImgFallback'

import type { TAPIMode } from '../../spec'
import {
  Wrapper,
  Dot,
  FloorNum,
  Avatar,
  HeaderBaseInfo,
  CommentUserName,
  CommentHeaderFirst,
} from '../../styles/comment/mobile_view/header'

type TProps = {
  data: TComment
  apiMode: TAPIMode
}

const CommentHeader: FC<TProps> = ({ data, apiMode }) => {
  return (
    <Wrapper>
      <Avatar
        src={data.author.avatar}
        fallback={
          <ImgFallback user={data.author} size={24} right={10} top={10} />
        }
      />
      <HeaderBaseInfo>
        <CommentHeaderFirst>
          <CommentUserName>
            {data.author.nickname}
            <Dot radius={3} space={8} />
            <FloorNum>#{data.floor}</FloorNum>
          </CommentUserName>
        </CommentHeaderFirst>
      </HeaderBaseInfo>
    </Wrapper>
  )
}

export default memo(CommentHeader)
