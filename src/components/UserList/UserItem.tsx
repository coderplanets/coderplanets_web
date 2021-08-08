import { FC, memo } from 'react'

import type { TUser } from '@/spec'

import { ICON } from '@/config'
import { SpaceGrow } from '@/components/Common'
import Tooltip from '@/components/Tooltip'
import Checker from '@/components/Checker'

import {
  Wrapper,
  Avatar,
  Intro,
  Name,
  Bio,
  CheckWrapper,
  RemoveIcon,
} from './styles/user_item'

type TProps = {
  user: TUser
}

const List: FC<TProps> = ({ user }) => {
  return (
    <Wrapper key={user.id}>
      <Avatar src={user.avatar} />
      <Intro>
        <Name>{user.nickname}</Name>
        <Bio>{user.bio}</Bio>
      </Intro>
    </Wrapper>
  )
}

export default memo(List)
