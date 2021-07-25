import { FC, memo } from 'react'
import TimeAgo from 'timeago-react'

import type { TComment } from '@/spec'

import ImgFallback from '@/components/ImgFallback'
import { Space } from '@/components/Common'
import DotDivider from '@/components/DotDivider'

import {
  Wrapper,
  FloorNum,
  CreateDate,
  Avatar,
  HeaderBaseInfo,
  BaseInfo,
  Nickname,
  UserBase,
  AuthorTag,
  ShortIntro,
} from '../styles/comment/header'

type TProps = {
  data: TComment
}

const CommentHeader: FC<TProps> = ({ data }) => {
  return (
    <Wrapper>
      <Avatar
        src={data.author.avatar}
        fallback={<ImgFallback user={data.author} size={22} right={10} />}
      />
      <HeaderBaseInfo>
        <BaseInfo>
          <UserBase>
            <Nickname>{data.author.nickname}</Nickname>
            <AuthorTag>作者</AuthorTag>
            <CreateDate>
              <DotDivider space={8} />
              <TimeAgo datetime={data.insertedAt} locale="zh_CN" />
            </CreateDate>
          </UserBase>
          <FloorNum>#{data.floor}</FloorNum>
          <Space right={10} />
        </BaseInfo>
        <ShortIntro>1 号员工 / CEO at coderplanets</ShortIntro>
      </HeaderBaseInfo>
    </Wrapper>
  )
}

export default memo(CommentHeader)
