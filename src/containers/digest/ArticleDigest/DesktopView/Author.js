import React from 'react'

import { Wrapper, Avatar, Title } from '../styles/desktop_view/author'

const Author = ({ user }) => {
  return (
    <Wrapper>
      <Avatar src={user.avatar} />
      <Title>{user.nickname}</Title>
    </Wrapper>
  )
}

export default Author
