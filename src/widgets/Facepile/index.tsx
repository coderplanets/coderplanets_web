/*
 *
 * Facepile
 *
 */

import { FC, createContext, useContext } from 'react'
import dynamic from 'next/dynamic'
import { compose, not, isNil, filter, reverse as reverseFn, slice } from 'ramda'
import { trackWindowScroll } from 'react-lazy-load-image-component'

import type { TUser, TSize } from '@/spec'
import type { TAvatarSize } from './spec'
import { AVATARS_LIST_LENGTH } from '@/config'
import { SIZE } from '@/constant'
import { buildLog } from '@/utils/logger'

// import RealAvatar from './RealAvatar'
import MoreItem from './MoreItem'

import { getAvatarSize } from './styles/metric'
import {
  Wrapper,
  AvatarsWrapper,
  TotalOneOffset,
  AvatarFallback,
} from './styles'

// @ts-ignore
const RealAvatarContext = createContext()

export const RealAvatar = dynamic(() => import('./RealAvatar'), {
  /* eslint-disable react/display-name */
  loading: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { size, user } = useContext(RealAvatarContext) as {
      user: TUser
      size: TSize
    }

    return (
      <AvatarFallback
        size={getAvatarSize(size, 'number') as number}
        user={user}
      />
    )
  },
  ssr: false,
})

/* eslint-disable-next-line */
const log = buildLog('w:Facepile:index')

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
  popCardPlacement?: 'top' | 'bottom'
  noLazyLoad?: boolean

  onUserSelect?: (user: TUser) => void
  onTotalSelect?: () => void
}

const Facepile: FC<TProps> = ({
  size = SIZE.SMALL,
  total = null,
  users = [],
  limit = AVATARS_LIST_LENGTH.POSTS,
  noLazyLoad = false,
  onUserSelect = log,
  onTotalSelect = log,
  showMore = true,
  showTotalNumber = false,
  reverse = false,
  popCardPlacement = 'bottom',
}) => {
  if (users.length === 0) {
    return <span />
  }

  const totalCount = total || users.length

  users = filter(validUser, getUniqueArray(users, 'login'))
  const sortedUsers = reverse ? reverseFn(users) : users

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
        <RealAvatarContext.Provider value={{ size, user: sortedUsers[0] }}>
          {/*  @ts-ignore */}
          <RealAvatar
            user={sortedUsers[0]}
            size={size}
            noLazyLoad={noLazyLoad}
            onUserSelect={onUserSelect}
            popCardPlacement={popCardPlacement}
          />
        </RealAvatarContext.Provider>
      ) : (
        <AvatarsWrapper>
          {slice(0, limit, sortedUsers).map((user) => (
            <RealAvatarContext.Provider key={user.login} value={{ size, user }}>
              {/*  @ts-ignore */}
              <RealAvatar
                user={user}
                size={size}
                noLazyLoad={noLazyLoad}
                onUserSelect={onUserSelect}
                popCardPlacement={popCardPlacement}
              />
            </RealAvatarContext.Provider>
          ))}
        </AvatarsWrapper>
      )}
    </Wrapper>
  )
}

export default trackWindowScroll(Facepile)
