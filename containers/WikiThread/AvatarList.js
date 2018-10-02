import React from 'react'

import AvatarAdder from '../AvatarAdder'
import { Popover, GithubUserCard } from '../../components'

import { Wrapper, AvatarLink, Avatar, CardWrapper } from './styles/avatar_list'

import { uid } from '../../utils'

const AvatarList = ({ users, addContributor }) => (
  <Wrapper>
    {users.map(user => (
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
    <AvatarAdder onConfirm={addContributor} />
  </Wrapper>
)

export default AvatarList
