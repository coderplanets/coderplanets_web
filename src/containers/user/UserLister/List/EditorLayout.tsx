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
  Desc,
  Nickname,
  Location,
  CityIcon,
  City,
  Action,
} from '../styles/list/editor_layout'
import { onFollow, undoFollow } from '../logic'

type TProps = {
  users: TUser[]
}

const EditorLayout: FC<TProps> = ({ users }) => {
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
            <Desc>{user.bio}</Desc>
            <Action>
              {isLogin && account.login === user.login ? (
                <div>(本尊)</div>
              ) : (
                <FollowButton
                  size="tiny"
                  hasFollowed={user.viewerHasFollowed}
                  userLogin={user.login}
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

export default memo(EditorLayout)
