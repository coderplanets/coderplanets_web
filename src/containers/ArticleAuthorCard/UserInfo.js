import React from 'react'
import T from 'prop-types'

import { cutFrom } from '@utils'
import FollowButton from '@components/FollowButton'

import { Wrapper, Avatar, Brief, Nickname, Bio } from './styles/user_info'

import { onFollow, onUndoFollow } from './logic'

const UserInfo = ({ user, isSelfViewing }) => (
  <Wrapper>
    <Brief>
      <Avatar src={user.avatar} />
      <Nickname>{user.nickname}</Nickname>
      {user.id && !isSelfViewing && (
        <FollowButton
          hasFollowd={user.viewerHasFollowed}
          userId={user.id}
          onFollow={onFollow}
          onUndoFollow={onUndoFollow}
        />
      )}
    </Brief>
    <Bio>{cutFrom(user.bio || '--', 35)}</Bio>
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
