import React, { FC } from 'react'
import TimeAgo from 'timeago-react'

import type { TPost, TAccount } from '@/spec'

import InlineTags from '@/components/InlineTags'
import DotDivider from '@/components/DotDivider'
import ImgFallback from '@/components/ImgFallback'

import {
  Wrapper,
  AvatarWrapper,
  Avatar,
  AuthorInfo,
  TimeStamp,
  TagListWrapper,
} from '../../styles/mobile_view/header'

type TProps = {
  item: TPost
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
        <InlineTags data={item.tags} />
      </TagListWrapper>
    </Wrapper>
  )
}

export default React.memo(Header)
