import { FC, memo } from 'react'

import { ICON } from '@/config'
import { mockUsers } from '@/utils/mock'

import { SpaceGrow } from '@/components/Common'
import Tooltip from '@/components/Tooltip'

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
            <Name>
              {user.nickname}
              <SpaceGrow />
              <Tooltip
                trigger="click"
                content="请确认是否继续？"
                placement="left"
                behavior="delete-confirm"
              >
                <RemoveIcon src={`${ICON}/shape/delete-solid.svg`} />
              </Tooltip>
            </Name>
            <Bio>{user.bio}</Bio>
          </Intro>
        </UserWrapper>
      ))}
    </Wrapper>
  )
}

export default memo(List)
