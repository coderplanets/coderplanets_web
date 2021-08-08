import { FC, memo } from 'react'

import { ICON } from '@/config'
import { mockUsers } from '@/utils/mock'

import { SpaceGrow } from '@/components/Common'
import Tooltip from '@/components/Tooltip'
import Checker from '@/components/Checker'

import {
  Wrapper,
  UserWrapper,
  Avatar,
  Intro,
  Name,
  Bio,
  CheckWrapper,
  RemoveIcon,
} from './styles/list'

type TProps = {
  withDelete: boolean
  withSelect: boolean
}

const List: FC<TProps> = ({ withDelete = false, withSelect = false }) => {
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
              {withSelect && (
                <CheckWrapper>
                  <Checker size="small" />
                </CheckWrapper>
              )}

              {withDelete && (
                <Tooltip
                  trigger="click"
                  content="请确认是否继续？"
                  placement="left"
                  behavior="delete-confirm"
                >
                  <RemoveIcon src={`${ICON}/shape/delete-solid.svg`} />
                </Tooltip>
              )}
            </Name>
            <Bio>{user.bio}</Bio>
          </Intro>
        </UserWrapper>
      ))}
    </Wrapper>
  )
}

export default memo(List)
