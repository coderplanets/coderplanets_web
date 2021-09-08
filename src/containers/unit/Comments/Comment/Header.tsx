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
  const { author } = data
  const avatarSize = author.bio ? 26 : 24

  return (
    <Wrapper>
      <Avatar
        src={data.author.avatar}
        avatarSize={avatarSize}
        fallback={
          <ImgFallback user={data.author} size={avatarSize} right={10} />
        }
      />
      <HeaderBaseInfo>
        <BaseInfo>
          <UserBase>
            <Nickname>{author.nickname}</Nickname>
            {data.isArticleAuthor && <AuthorTag>作者</AuthorTag>}
            <CreateDate>
              <DotDivider space={8} />
              <TimeAgo datetime={data.insertedAt} locale="zh_CN" />
            </CreateDate>
          </UserBase>
          <FloorNum>
            #<Space right={2} />
            {data.floor}
          </FloorNum>
          <Space right={10} />
        </BaseInfo>

        {author.bio && <ShortIntro>{author.bio}</ShortIntro>}
      </HeaderBaseInfo>
    </Wrapper>
  )
}

export default memo(CommentHeader)
