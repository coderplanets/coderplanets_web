import React from 'react'
import TimeAgo from 'timeago-react'

import { ICON } from '@/config'
import { cutFrom } from '@/utils'

import DigestSentence from '@/components/DigestSentence'

import {
  Wrapper,
  Dot,
  PublishTime,
  Extra,
  AuthorName,
  ItemWrapper,
  ViewsIcon,
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

      <DigestSentence top={5} right={60} onPreview={() => onPreview(item)}>
        {cutFrom(item.digest, 90)}
      </DigestSentence>
    </Wrapper>
  )
}

export default Body
