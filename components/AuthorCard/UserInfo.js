import React from 'react'

import { Wrapper, Avatar, Brief, Nickname, Bio } from './styles/user_info'
import { cutFrom } from '../../utils'

const UserInfo = ({ user }) => (
  <Wrapper>
    <Avatar src={user.avatar} />
    <Brief>
      <Nickname>{user.nickname}</Nickname>
      <Bio>{cutFrom(user.bio || '--', 35)}</Bio>
    </Brief>
  </Wrapper>
)

export default UserInfo
