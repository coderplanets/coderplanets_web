import React from 'react'

import { Button } from '@/components/Buttons'
import ImgFallback from '@/components/ImgFallback'

import { Wrapper, Avatar, Name } from '../styles/desktop_view/author'

const Author = ({ user }) => {
  return (
    <Wrapper>
      <Avatar
        src={user.avatar}
        fallback={<ImgFallback user={user} size={36} />}
      />
      <Name>{user.nickname}</Name>
      <Button size="tiny" ghost>
        &nbsp;关&nbsp;&nbsp;注&nbsp;
      </Button>
    </Wrapper>
  )
}

export default Author
