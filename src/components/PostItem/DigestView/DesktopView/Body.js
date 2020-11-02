import React from 'react'
import TimeAgo from 'timeago-react'

import { ICON } from '@/config'
import { cutFrom } from '@/utils'

import {
  Wrapper,
  Digest,
  Dot,
  PublishTime,
  Extra,
  AuthorName,
  ItemWrapper,
  ViewsIcon,
  //
  PreviewWrapper,
  PreviewIcon,
  PreviewText,
} from '../../styles/digest_view/body'

const Body = ({ item, onPreview }) => {
  return (
    <Wrapper>
      <Extra>
        <AuthorName>{item.author.nickname}</AuthorName>
        <Dot radius="4px" space="8px" />
        <PublishTime>
          <TimeAgo datetime={item.insertedAt} locale="zh_CN" />
        </PublishTime>
        <ItemWrapper>
          <ViewsIcon src={`${ICON}/article/viewed.svg`} />
          {item.views}
        </ItemWrapper>
      </Extra>
      <Digest onClick={() => onPreview(item)}>
        {cutFrom(item.digest, 90)}
        <PreviewWrapper>
          <PreviewText>预览</PreviewText>
          <PreviewIcon src={`${ICON}/shape/arrow-simple.svg`} />
        </PreviewWrapper>
      </Digest>
    </Wrapper>
  )
}

export default Body
