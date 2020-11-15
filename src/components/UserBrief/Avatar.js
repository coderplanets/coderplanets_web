import React from 'react'

import { VIEW } from '@/constant'
import { DEFAULT_USER_AVATAR } from '@/config'

import AvatarFallback from '@/components/AvatarFallback'
import BadgeInfo from './BadgeInfo'

import { Wrapper, Avatar } from './styles/avatar'

const AvatarComp = ({ user, view }) => {
  return (
    <Wrapper>
      <a href={`/user/${user.login}`} rel="noopener noreferrer" target="_blank">
        <div>
          <Avatar
            src={user.avatar || DEFAULT_USER_AVATAR}
            fallback={<AvatarFallback user={user} width={150} />}
          />
        </div>
      </a>

      {view === VIEW.DRAWER && <BadgeInfo user={user} />}
    </Wrapper>
  )
}

export default React.memo(AvatarComp)
