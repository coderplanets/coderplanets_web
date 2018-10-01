import React from 'react'

import AvatarAdder from '../AvatarAdder'
import { Popover, GithubUserCard } from '../../components'

import { Wrapper, AvatarLink, Avatar, CardWrapper } from './styles/avatar_list'

import fakeUser from './fakeUser'
import { uid } from '../../utils'

const AvatarList = () => (
  <Wrapper>
    {fakeUser.map(user => (
      <Popover
        content={
          <CardWrapper>
            <GithubUserCard user={user} />
          </CardWrapper>
        }
        placement="bottom"
        trigger="hover"
        key={uid.gen()}
      >
        <AvatarLink>
          <Avatar src={user.avatar} />
        </AvatarLink>
      </Popover>
    ))}
    <AvatarAdder />
  </Wrapper>
)

export default AvatarList
