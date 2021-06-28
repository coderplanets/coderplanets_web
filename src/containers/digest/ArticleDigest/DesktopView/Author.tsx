import { FC } from 'react'

import type { TUser } from '@/spec'
import { Button } from '@/components/Buttons'
import TheAvatar from '@/components/TheAvatar'

import { Wrapper, Name } from '../styles/desktop_view/author'

type TProps = {
  user: TUser
}

const Author: FC<TProps> = ({ user }) => {
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
