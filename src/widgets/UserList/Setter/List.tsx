import { FC, memo } from 'react'

import type { TUser } from '@/spec'

import { ICON } from '@/config'
import { SpaceGrow } from '@/widgets/Common'
import Tooltip from '@/widgets/Tooltip'
import Checker from '@/widgets/Checker'

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

  onDelete?: (u: TUser) => void
  onSelect?: (u: TUser) => void
}

const List: FC<TProps> = ({
  users,
  withDelete = false,
  withSelect = false,
  onDelete,
  onSelect,
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
                  <Checker
                    size="small"
                    onChange={(checked) => checked && onSelect(user)}
                  />
                </CheckWrapper>
              )}

              {withDelete && (
                <Tooltip
                  trigger="click"
                  content="请确认是否继续？"
                  placement="left"
                  behavior="delete-confirm"
                >
                  <RemoveIcon
                    src={`${ICON}/shape/delete-solid.svg`}
                    onClick={() => onDelete(user)}
                  />
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
