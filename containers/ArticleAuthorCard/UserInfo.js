import React from 'react'
import PropTypes from 'prop-types'

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

UserInfo.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    avatar: PropTypes.string,
    nickname: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
}

UserInfo.defaultProps = {}

export default UserInfo
