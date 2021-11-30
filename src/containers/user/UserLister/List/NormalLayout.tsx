import { FC, memo } from 'react'

import type { TUser } from '@/spec'
import Link from 'next/link'

import { useAccount } from '@/hooks'
import FollowButton from '@/widgets/Buttons/FollowButton'

import {
  Wrapper,
  UserWrapper,
  UserAvatar,
  UserBrief,
  Title,
  Nickname,
  Location,
  City,
  CityIcon,
  Action,
} from '../styles/list/normal_layout'
import { onFollow, undoFollow } from '../logic'

type TProps = {
  users: TUser[]
}

const NormalLayout: FC<TProps> = ({ users }) => {
  const { c11n, user: account } = useAccount()
  const { isLogin } = c11n

  return (
    <Wrapper>
      {users.map((user) => (
        <UserWrapper key={user.login}>
          <UserAvatar src={user.avatar} />
          <UserBrief>
            <Title>
              <Link href={`/u/${user.login}`} passHref>
                <Nickname>{user.nickname}</Nickname>
              </Link>
              <Location>
                <CityIcon />
                <City>{user.location || user.geoCity || '--'}</City>
              </Location>
            </Title>
            <Action>
              {isLogin && account.id === user.id ? (
                <div>(本尊)</div>
              ) : (
                <FollowButton
                  size="tiny"
                  hasFollowed={user.viewerHasFollowed}
                  userId={user.id}
                  onFollow={onFollow}
                  onUndoFollow={undoFollow}
                />
              )}
            </Action>
          </UserBrief>
        </UserWrapper>
      ))}
    </Wrapper>
  )
}

export default memo(NormalLayout)
