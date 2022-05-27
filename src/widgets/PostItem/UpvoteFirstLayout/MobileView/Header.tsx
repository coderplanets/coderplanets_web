import { FC, memo } from 'react'
import TimeAgo from 'timeago-react'

import type { TPost, TAccount } from '@/spec'

import TagsList from '@/widgets/TagsList'
import DotDivider from '@/widgets/DotDivider'
import ImgFallback from '@/widgets/ImgFallback'

import {
  Wrapper,
  AvatarWrapper,
  Avatar,
  AuthorInfo,
  TimeStamp,
  TagListWrapper,
} from '../../styles/comment_fist_layout/mobile_view/header'

type TProps = {
  article: TPost
  onAuthorSelect?: (obj: TAccount) => void
}

const Header: FC<TProps> = ({ article, onAuthorSelect }) => {
  return (
    <Wrapper>
      <AuthorInfo>
        <AvatarWrapper onClick={() => onAuthorSelect(article.author)}>
          <Avatar
            src={article.author.avatar}
            fallback={<ImgFallback user={article.author} size={16} right={6} />}
          />
        </AvatarWrapper>
        <div>{article.author.nickname}</div>
        <DotDivider radius={3} space={6} />
        <TimeStamp>
          <TimeAgo datetime={article.insertedAt} locale="zh_CN" />
        </TimeStamp>
      </AuthorInfo>
      <TagListWrapper>
        <TagsList items={article.articleTags} />
      </TagListWrapper>
    </Wrapper>
  )
}

export default memo(Header)
