import React from 'react'

import ImgFallback from '@/components/ImgFallback'

import {
  Wrapper,
  Dot,
  FloorNum,
  Avatar,
  HeaderBaseInfo,
  CommentUserName,
  CommentHeaderFirst,
} from '../../styles/comment/mobile_view/header'

const CommentHeader = ({ data }) => {
  return (
    <Wrapper>
      <Avatar
        src={data.author.avatar}
        fallback={
          <ImgFallback user={data.author} width={24} right={10} top={10} />
        }
      />
      <HeaderBaseInfo>
        <CommentHeaderFirst>
          <CommentUserName>
            {data.author.nickname}
            <Dot radius="3px" space="8px" />
            <FloorNum>#{data.floor}</FloorNum>
          </CommentUserName>
        </CommentHeaderFirst>
      </HeaderBaseInfo>
    </Wrapper>
  )
}

export default React.memo(CommentHeader)
