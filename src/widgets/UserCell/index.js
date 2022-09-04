/*
 *
 * UserCell
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils/logger'
import { UserCellWrapper, Avatar, UserInfo, NickName, Bio } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:UserCell:index')

const UserCell = ({ user }) => {
  return (
    <UserCellWrapper>
      <Avatar src={user.avatar} />
      <UserInfo>
        <NickName>{user.nickname}</NickName>
        <Bio>{user.bio}</Bio>
      </UserInfo>
    </UserCellWrapper>
  )
}

UserCell.propTypes = {
  user: T.shape({
    id: T.string,
    avatar: T.string,
    nickname: T.string,
    bio: T.string,
  }).isRequired,
}

UserCell.defaultProps = {}

export default React.memo(UserCell)
