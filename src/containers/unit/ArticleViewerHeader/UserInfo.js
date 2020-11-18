import React from 'react'
import TimeAgo from 'timeago-react'

import ImgFallback from '@/components/ImgFallback'
import { Wrapper, Avatar, UserName, PublishAt } from './styles/user_info'

const UserInfo = ({ author, insertedAt }) => (
  <Wrapper>
    <Avatar
      src={author.avatar}
      alt={`@${author.nickname}`}
      fallback={<ImgFallback user={author} width={35} right={10} />}
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
