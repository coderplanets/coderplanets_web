import { FC, memo } from 'react'

import type { TUser } from '@/spec'

import { Wrapper, Avatar, Intro, Name, Bio } from './styles/user_item'

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
