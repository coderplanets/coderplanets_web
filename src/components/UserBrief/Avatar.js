import React from 'react'

import { VIEW } from '@/constant'
import { DEFAULT_USER_AVATAR } from '@/config'

import ImgFallback from '@/components/ImgFallback'
import BadgeInfo from './BadgeInfo'

import { Wrapper, Avatar } from './styles/avatar'

const AvatarComp = ({ user, view }) => {
  return (
    <Wrapper>
      <a href={`/user/${user.login}`} rel="noopener noreferrer" target="_blank">
        <div>
          <Avatar
            src={user.avatar || DEFAULT_USER_AVATAR}
            fallback={<ImgFallback user={user} size={150} />}
          />
        </div>
      </a>

      {view === VIEW.DRAWER && <BadgeInfo user={user} />}
    </Wrapper>
  )
}

export default React.memo(AvatarComp)
