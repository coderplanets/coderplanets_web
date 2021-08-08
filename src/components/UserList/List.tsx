import { FC, memo } from 'react'

import { ICON } from '@/config'
import { mockUsers } from '@/utils/mock'

import {
  Wrapper,
  UserWrapper,
  Avatar,
  Intro,
  Name,
  Bio,
  RemoveIcon,
} from './styles/list'

const List = () => {
  const users = mockUsers(5)

  return (
    <Wrapper>
      {users.map((user) => (
        <UserWrapper key={user.id}>
          <Avatar src={user.avatar} />
          <Intro>
            <Name>{user.nickname}</Name>
            <Bio>{user.bio}</Bio>
          </Intro>
          <RemoveIcon src={`${ICON}/shape/delete.svg`} />
        </UserWrapper>
      ))}
    </Wrapper>
  )
}

export default memo(List)
