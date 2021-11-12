import { FC, memo } from 'react'
import Link from 'next/link'

import type { TUser } from '@/spec'
import { Wrapper, Member, Avatar, Intro, Name, Bio } from './styles/teams'

type TProps = {
  teammates: TUser[]
}

const Teams: FC<TProps> = ({ teammates }) => {
  return (
    <Wrapper>
      {teammates.map((user) => (
        <Member key={user.login}>
          <Avatar src={user.avatar} />
          <Intro>
            <Link href={`/u/${user.login}`} passHref>
              <Name>{user.nickname}</Name>
            </Link>
            <Bio>{user.bio}</Bio>
          </Intro>
        </Member>
      ))}
    </Wrapper>
  )
}

export default memo(Teams)
