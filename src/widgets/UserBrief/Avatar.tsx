import { FC, memo } from 'react'

import Link from 'next/link'
import { DEFAULT_USER_AVATAR } from '@/config'
import type { TUser } from '@/spec'

import ImgFallback from '@/widgets/ImgFallback'
// import BadgeInfo from './BadgeInfo'

import { Wrapper, Avatar, QuoteAvatar } from './styles/avatar'

type TProps = {
  user: TUser
}

const AvatarComp: FC<TProps> = ({ user }) => {
  const isQuote = user.login === 'mydearxym2'

  if (isQuote) {
    return (
      <Wrapper>
        <Link href={`/user/${user.login}`} passHref>
          <QuoteAvatar
            src={user.avatar || DEFAULT_USER_AVATAR}
            fallback={<ImgFallback user={user} size={200} />}
          />
        </Link>

        {/* {view === VIEW.DRAWER && <BadgeInfo user={user} />} */}
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <Link href={`/user/${user.login}`} passHref>
        <Avatar
          src={user.avatar || DEFAULT_USER_AVATAR}
          fallback={<ImgFallback user={user} size={200} />}
        />
      </Link>

      {/* {view === VIEW.DRAWER && <BadgeInfo user={user} />} */}
    </Wrapper>
  )
}

export default memo(AvatarComp)
