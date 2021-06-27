import { FC } from 'react'

import type { TUser } from '@/spec'
import Tooltip from '@/components/Tooltip'

import { getAvatarSize } from './styles/metric'
import type { TAvatarSize } from './spec'

import {
  Wrapper,
  AvatarsImg,
  AvatarFallback,
  UserPopContent,
} from './styles/real_avatar'

type TProps = {
  user?: TUser
  size?: TAvatarSize
  scrollPosition?: any
  onUserSelect: (user: TUser) => void
}

const RealAvatar: FC<TProps> = ({ user, size, onUserSelect }) => {
  return (
    <Tooltip
      content={<UserPopContent>{user.nickname}</UserPopContent>}
      delay={200}
      contentHeight={getAvatarSize(size, 'number') as string}
      showArrow={false}
      noPadding
    >
      <Wrapper key={user.id} size={size}>
        <AvatarsImg
          src={user.avatar}
          size={size}
          onClick={() => onUserSelect(user)}
          scrollPosition={null}
          fallback={
            <AvatarFallback
              size={getAvatarSize(size, 'number') as number}
              user={user}
            />
          }
        />
      </Wrapper>
    </Tooltip>
  )
}

export default RealAvatar
