import React from 'react'
import TimeAgo from 'timeago-react'

import { Wrapper, Avatar, UserName, PublishAt } from './styles/user_info'

const UserInfo = ({ author, insertedAt }) => (
  <Wrapper>
    <Avatar src={author.avatar} alt="user_avatar" />
    <div>
      <UserName>{author.nickname}</UserName>
      <PublishAt>
        发布于: <TimeAgo datetime={insertedAt} locale="zh_CN" />
      </PublishAt>
    </div>
  </Wrapper>
)

export default UserInfo
