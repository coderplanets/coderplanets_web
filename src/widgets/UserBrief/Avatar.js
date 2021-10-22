import React from 'react'

import { VIEW } from '@/constant'
import { DEFAULT_USER_AVATAR } from '@/config'

import ImgFallback from '@/widgets/ImgFallback'
import BadgeInfo from './BadgeInfo'

import {
  Wrapper,
  Avatar,
  InnerShadow,
  QuoteAvatar,
  QuoteShadow,
} from './styles/avatar'

const AvatarComp = ({ user, view }) => {
  const isQuote = user.login === 'mydearxym'

  if (isQuote) {
    return (
      <Wrapper>
        <a
          href={`/user/${user.login}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <QuoteAvatar
            src={user.avatar || DEFAULT_USER_AVATAR}
            fallback={<ImgFallback user={user} size={200} />}
          />
        </a>

        <QuoteShadow />

        {view === VIEW.DRAWER && <BadgeInfo user={user} />}
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <a href={`/user/${user.login}`} rel="noopener noreferrer" target="_blank">
        <Avatar
          src={user.avatar || DEFAULT_USER_AVATAR}
          fallback={<ImgFallback user={user} size={200} />}
        />
      </a>

      <InnerShadow />

      {view === VIEW.DRAWER && <BadgeInfo user={user} />}
    </Wrapper>
  )
}

export default React.memo(AvatarComp)
