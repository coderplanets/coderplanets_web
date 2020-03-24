import React from 'react'

import Tooltip from '@components/Tooltip'
import { Wrapper, Avatar, PopInfo } from './styles/user_list'

const UserList = ({ items }) => (
  <Wrapper>
    {items.map(user => (
      <Tooltip
        key={user.id}
        placement="bottom"
        content={<PopInfo>{user.nickname}</PopInfo>}
      >
        <div>
          <Avatar src={user.avatar} />
        </div>
      </Tooltip>
    ))}
  </Wrapper>
)

export default React.memo(UserList)
