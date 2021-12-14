import { FC, memo } from 'react'
import type { TUser } from '@/spec'

import { Wrapper, Avatar, Intro, NickName, Bio } from './styles/mobile_banner'

type TProps = {
  user: TUser
}

const MobileBanner: FC<TProps> = ({ user }) => {
  return (
    <Wrapper>
      <Avatar src={user.avatar} />
      <Intro>
        <NickName>{user.nickname}</NickName>
        <Bio>{user.bio}</Bio>
      </Intro>
    </Wrapper>
  )
}

export default memo(MobileBanner)
