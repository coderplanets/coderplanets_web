import React from 'react'
import TimeAgo from 'timeago-react'

// import { ICON_CMD } from '../../config'

import {
  Wrapper,
  UserInfo,
  ReactionWrapper,
  Avatar,
  UserName,
  PublishAt,
} from './styles/header'

// import { TYPE } from '../../utils'
// import * as logic from './logic'

const Header = ({ data }) => (
  <Wrapper>
    <UserInfo>
      <Avatar src={data.author.avatar} alt="user_avatar" />
      <div>
        <UserName>{data.author.nickname}</UserName>
        <PublishAt>
          发表于: <TimeAgo datetime={data.insertedAt} locale="zh_CN" />
        </PublishAt>
      </div>
    </UserInfo>
    <ReactionWrapper>....</ReactionWrapper>
  </Wrapper>
)

export default Header
