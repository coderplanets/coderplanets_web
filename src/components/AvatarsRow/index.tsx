/*
 *
 * AvatarsRow
 *
 */

import { FC } from 'react'
import { compose, not, isNil, filter, reverse as reverseFn, slice } from 'ramda'
import { trackWindowScroll } from 'react-lazy-load-image-component'

import type { TUser } from '@/spec'
import { AVATARS_LIST_LENGTH } from '@/config'
import { SIZE } from '@/constant'
import { buildLog } from '@/utils'

import type { TAvatarSize } from './spec'

import RealAvatar from './RealAvatar'
import MoreItem from './MoreItem'

import { Wrapper, AvatarsWrapper, TotalOneOffset } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:AvatarsRow:index')

const validUser = compose(not, isNil)

const getUniqueArray = (arr, comp) => {
  const unique = arr
    .map((e) => e[comp])

    // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the dead keys & store unique objects
    .filter((e) => arr[e])
    .map((e) => arr[e])

  return unique
}

export type TProps = {
  users?: TUser[]
  size?: TAvatarSize
  total?: number | null
  limit: number
  showMore?: boolean
  showTotalNumber?: boolean
  reverse?: boolean
  scrollPosition?: any

  onUserSelect?: (user: TUser) => void
  onTotalSelect?: () => void
}

const AvatarsRow: FC<TProps> = ({
  size = SIZE.SMALL,
  total = null,
  users = [],
  limit = AVATARS_LIST_LENGTH.POSTS,
  onUserSelect = log,
  onTotalSelect = log,
  showMore = true,
  showTotalNumber = false,
  reverse = true,
  // see https://github.com/Aljullu/react-lazy-load-image-component/issues/42
  scrollPosition = null,
}) => {
  if (users.length === 0) {
    return <span />
  }

  const totalCount = total || users.length

  users = filter(validUser, getUniqueArray(users, 'id'))
  const sortedUsers = reverse ? users : reverseFn(users)

  return (
    <Wrapper total={totalCount}>
      {totalCount <= 1 || !showMore ? (
        <TotalOneOffset />
      ) : (
        <MoreItem
          size={size}
          total={totalCount}
          showTotalNumber={showTotalNumber}
          onTotalSelect={onTotalSelect}
        />
      )}

      {totalCount === 1 ? (
        <RealAvatar
          user={sortedUsers[0]}
          size={size}
          onUserSelect={onUserSelect}
        />
      ) : (
        <AvatarsWrapper>
          {slice(0, limit, sortedUsers).map((user) => (
            <RealAvatar
              key={user.id}
              user={user}
              size={size}
              onUserSelect={onUserSelect}
            />
          ))}
        </AvatarsWrapper>
      )}
    </Wrapper>
  )
}

export default trackWindowScroll(AvatarsRow)
