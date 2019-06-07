import React from 'react'
import T from 'prop-types'

import { cutFrom } from '@utils'
import { Wrapper, Avatar, Brief, Nickname, Bio } from './styles/user_info'

const UserInfo = ({ user }) => (
  <Wrapper>
    <Avatar src={user.avatar} />
    <Brief>
      <Nickname>{user.nickname}</Nickname>
      <Bio>{cutFrom(user.bio || '--', 35)}</Bio>
    </Brief>
  </Wrapper>
)

UserInfo.propTypes = {
  user: T.shape({
    id: T.string,
    avatar: T.string,
    nickname: T.string,
    bio: T.string,
  }).isRequired,
}

UserInfo.defaultProps = {}

export default UserInfo
