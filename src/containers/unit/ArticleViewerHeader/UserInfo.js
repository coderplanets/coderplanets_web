import React from 'react'
import TimeAgo from 'timeago-react'

import AvatarFallback from '@/components/AvatarFallback'
import { Wrapper, Avatar, UserName, PublishAt } from './styles/user_info'

const UserInfo = ({ author, insertedAt }) => (
  <Wrapper>
    <Avatar
      src={author.avatar}
      alt={`@${author.nickname}`}
      fallback={<AvatarFallback user={author} width={35} right="10px" />}
      visibleByDefault
    />
    <div>
      <UserName>{author.nickname}</UserName>
      <PublishAt>
        发布于: <TimeAgo datetime={insertedAt} locale="zh_CN" />
      </PublishAt>
    </div>
  </Wrapper>
)

export default React.memo(UserInfo)
