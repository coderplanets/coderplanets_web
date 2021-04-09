import React from 'react'
import TimeAgo from 'timeago-react'

import type { TComment } from '@/spec'

import ImgFallback from '@/components/ImgFallback'
import DotDivider from '@/components/DotDivider'

import {
  Wrapper,
  FloorNum,
  CreateDate,
  Avatar,
  HeaderBaseInfo,
  BaseInfo,
  UserName,
  AuthorTag,
  ShortIntro,
} from '../styles/comment/header'

type TProps = {
  data: TComment
}

const CommentHeader: React.FC<TProps> = ({ data }) => {
  return (
    <Wrapper>
      <Avatar
        src={data.author.avatar}
        fallback={<ImgFallback user={data.author} size={22} right={10} />}
      />
      <HeaderBaseInfo>
        <BaseInfo>
          <UserName>
            <div>{data.author.nickname}</div>
            <AuthorTag>作者</AuthorTag>
          </UserName>
          <FloorNum>#{data.floor}</FloorNum>
          <DotDivider radius={3} space={10} />
          <CreateDate>
            <TimeAgo datetime={data.insertedAt} locale="zh_CN" />
          </CreateDate>
        </BaseInfo>
        <ShortIntro>1 号员工 / CEO at coderplanets</ShortIntro>
      </HeaderBaseInfo>
    </Wrapper>
  )
}

export default React.memo(CommentHeader)
