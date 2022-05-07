import { FC, memo, Fragment } from 'react'
import TimeAgo from 'timeago-react'
import { isMobile } from 'react-device-detect'

import type { TComment } from '@/spec'

import ImgFallback from '@/widgets/ImgFallback'
import { Space } from '@/widgets/Common'
import DotDivider from '@/widgets/DotDivider'

import {
  FloorNum,
  CreateDate,
  Avatar,
  HeaderBaseInfo,
  BaseInfo,
  Nickname,
  UserBase,
  AuthorTag,
  RefToOther,
  RefLabel,
  RefUser,
  ShortIntro,
} from '../../styles/comment/header/article'

type TProps = {
  data: TComment
  showInnerRef: boolean
}

const CommentHeader: FC<TProps> = ({ data, showInnerRef }) => {
  const { author, meta } = data
  const avatarSize = author.bio ? 26 : 24

  return (
    <Fragment>
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
            {data.isArticleAuthor && <AuthorTag>发帖</AuthorTag>}
            {showInnerRef && meta.isReplyToOthers && (
              <RefToOther>
                <RefLabel>回复</RefLabel>
                <RefUser>{data.replyTo?.author?.nickname}</RefUser>
              </RefToOther>
            )}
            <CreateDate>
              <DotDivider space={isMobile ? 4 : 8} />
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
    </Fragment>
  )
}

export default memo(CommentHeader)
