import { FC, memo } from 'react'

import type { TUser } from '@/spec'

import {
  Wrapper,
  AvatarWrapper,
  Avatar,
  BadgeWrapper,
  BadgeIcon,
  Info,
  Name,
  Bio,
} from '../styles/members/admin_member'

type TProps = {
  user: TUser
}

const AdminMember: FC<TProps> = ({ user }) => {
  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar src={user.avatar} />
        <BadgeWrapper>
          <BadgeIcon />
        </BadgeWrapper>
      </AvatarWrapper>
      <Info>
        <Name>{user.nickname}</Name>
        <Bio>{user.bio}</Bio>
      </Info>
    </Wrapper>
  )
}

export default memo(AdminMember)
