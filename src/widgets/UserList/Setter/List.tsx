import { FC, memo } from 'react'

import type { TUser } from '@/spec'
import { ICON } from '@/config'

import CustomScroller from '@/widgets/CustomScroller'
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

  onRemove?: (u: TUser) => void
  onAdd?: (u: TUser) => void
}

const List: FC<TProps> = ({
  users,
  withDelete = false,
  withSelect = false,
  onRemove,
  onAdd,
}) => {
  return (
    <Wrapper>
      <CustomScroller
        direction="vertical"
        height="200px"
        showShadow={false}
        autoHide
      >
        {users.map((user) => (
          <UserWrapper key={user.login}>
            <Avatar src={user.avatar} />
            <Intro>
              <Name>
                {user.nickname}
                <SpaceGrow />
                {withSelect && (
                  <CheckWrapper>
                    <Checker
                      size="small"
                      onChange={(checked) => checked && onAdd(user)}
                    />
                  </CheckWrapper>
                )}

                {withDelete && (
                  <Tooltip
                    trigger="click"
                    content="请确认是否继续？"
                    placement="left"
                    behavior="delete-confirm"
                    onConfirm={() => onRemove(user)}
                  >
                    <RemoveIcon src={`${ICON}/shape/delete-solid.svg`} />
                  </Tooltip>
                )}
              </Name>
              <Bio>{user.bio}</Bio>
            </Intro>
          </UserWrapper>
        ))}
      </CustomScroller>
    </Wrapper>
  )
}

export default memo(List)
