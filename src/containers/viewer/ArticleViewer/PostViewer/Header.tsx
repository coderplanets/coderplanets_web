import { FC, memo } from 'react'
import TimeAgo from 'timeago-react'

import type { TPost } from '@/spec'
import DotDivider from '@/components/DotDivider'

import {
  Wrapper,
  AuthorWrapper,
  Avatar,
  AuthorName,
  AuthorDesc,
  PublishWrapper,
  PublishHint,
  PubDate,
  EditedHint,
} from '../styles/post_viewer/header'

type TProps = {
  article: TPost
}

const Header: FC<TProps> = ({ article }) => {
  const { author, insertedAt } = article
  return (
    <Wrapper>
      <AuthorWrapper>
        <Avatar src={author.avatar} />
        <AuthorName>{author.nickname}</AuthorName>
        <AuthorDesc>maker@coderplanets</AuthorDesc>
      </AuthorWrapper>
      <PublishWrapper>
        <PublishHint>发布于:</PublishHint>
        <PubDate>
          <TimeAgo datetime={insertedAt} locale="zh_CN" />
        </PubDate>
        <DotDivider space={8} />
        <EditedHint>修改过</EditedHint>
      </PublishWrapper>
    </Wrapper>
  )
}

export default memo(Header)
