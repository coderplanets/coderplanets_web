import React from 'react'

import Popover from '../Popover'
import { Wrapper, Avatar, PopInfo } from './styles/user_list'

const UserList = ({ items }) => (
  <Wrapper>
    {items.map(user => (
      <Popover
        key={user.id}
        placement="bottom"
        trigger="hover"
        content={<PopInfo>{user.nickname}</PopInfo>}
      >
        <div>
          <Avatar src={user.avatar} />
        </div>
      </Popover>
    ))}
  </Wrapper>
)

export default UserList
