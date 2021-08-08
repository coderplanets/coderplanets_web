import { FC, memo } from 'react'

import type { TUser } from '@/spec'

import { ICON } from '@/config'
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
} from '../styles/setter/list'

type TProps = {
  users: TUser[]
  withDelete: boolean
  withSelect: boolean
}

const List: FC<TProps> = ({
  users,
  withDelete = false,
  withSelect = false,
}) => {
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
