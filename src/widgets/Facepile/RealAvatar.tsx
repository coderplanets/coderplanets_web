import { FC } from 'react'

import type { TUser } from '@/spec'

import Tooltip from '@/widgets/Tooltip'
import UserCard from '@/widgets/Cards/UserCard'

import { getAvatarSize } from './styles/metric'
import type { TAvatarSize } from './spec'

import {
  Wrapper,
  InnerWrapper,
  AvatarsImg,
  AvatarFallback,
} from './styles/real_avatar'

type TProps = {
  user?: TUser
  size?: TAvatarSize
  noLazyLoad: boolean
  popCardPlacement?: 'top' | 'bottom'
  onUserSelect: (user: TUser) => void
}

const RealAvatar: FC<TProps> = ({
  user,
  size,
  noLazyLoad,
  onUserSelect,
  popCardPlacement,
}) => {
  return (
    <Wrapper size={size}>
      <Tooltip
        content={<UserCard user={user} />}
        delay={0}
        contentHeight={getAvatarSize(size, 'number') as string}
        placement={popCardPlacement}
        interactive={false}
      >
        <InnerWrapper>
          <AvatarsImg
            src={user.avatar}
            size={size}
            onClick={() => onUserSelect(user)}
            scrollPosition={null}
            noLazy={noLazyLoad}
            fallback={
              <AvatarFallback
                size={getAvatarSize(size, 'number') as number}
                user={user}
              />
            }
          />
        </InnerWrapper>
      </Tooltip>
    </Wrapper>
  )
}

export default RealAvatar
