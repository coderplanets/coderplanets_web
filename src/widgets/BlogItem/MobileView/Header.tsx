import { FC, memo } from 'react'
import TimeAgo from 'timeago-react'

import type { TBlog, TAccount } from '@/spec'

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
} from '../styles/mobile_view/header'

type TProps = {
  item: TBlog
  onAuthorSelect?: (obj: TAccount) => void
}

const Header: FC<TProps> = ({ item, onAuthorSelect }) => {
  return (
    <Wrapper>
      <AuthorInfo>
        <AvatarWrapper onClick={() => onAuthorSelect(item.author)}>
          <Avatar
            src={item.author.avatar}
            fallback={<ImgFallback user={item.author} size={16} right={6} />}
          />
        </AvatarWrapper>
        <div>{item.author.nickname}</div>
        <DotDivider radius={3} space={6} />
        <TimeStamp>
          <TimeAgo datetime={item.insertedAt} locale="zh_CN" />
        </TimeStamp>
      </AuthorInfo>
      <TagListWrapper>
        <TagsList items={item.articleTags} />
      </TagListWrapper>
    </Wrapper>
  )
}

export default memo(Header)
