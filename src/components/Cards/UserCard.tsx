/*
 * cards for user
 */

import { FC, memo } from 'react'

import type { TUser } from '@/spec'
import { cutRest } from '@/utils/helper'

import {
  Wrapper,
  Avatar,
  Info,
  ShortBio,
  Header,
  Title,
  Nickname,
  Login,
  Desc,
} from './styles/user_card'

type TProps = {
  item: TUser
}

const UserCard: FC<TProps> = ({ item }) => {
  const { avatar, nickname, login, bio } = item
  return (
    <Wrapper>
      <Header>
        <Avatar src={avatar} />
        <Info>
          <Title href={`user/${login}`}>
            <Nickname>{nickname}</Nickname>
            <Login>{login}</Login>
          </Title>
          {/* <ShortBio>{bio || '--'}</ShortBio> */}
        </Info>
      </Header>
      <Desc>{cutRest(bio, 50)}</Desc>
    </Wrapper>
  )
}

export default memo(UserCard)
