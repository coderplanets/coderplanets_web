import React from 'react'

import { Button } from '@/components/Buttons'
import TheAvatar from '@/components/TheAvatar'

import { Wrapper, Name } from '../styles/desktop_view/author'

const Author = ({ user }) => {
  return (
    <Wrapper>
      <TheAvatar user={user} metric="article-author" />
      <Name>{user.nickname}</Name>
      <Button size="tiny" ghost>
        &nbsp;关&nbsp;&nbsp;注&nbsp;
      </Button>
    </Wrapper>
  )
}

export default Author
