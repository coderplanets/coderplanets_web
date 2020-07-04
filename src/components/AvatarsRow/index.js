/*
 *
 * AvatarsRow
 *
 */

import React, { useCallback } from 'react'
import T from 'prop-types'
import { compose, not, isNil, filter, reverse, slice } from 'ramda'

import { AVATARS_LIST_LENGTH } from '@/config'
import { buildLog, o2s, s2o } from '@/utils'

import Tooltip from '@/components/Tooltip'
import MoreItem from './MoreItem'

import { Wrapper, AvatarsItem, AvatarsImg, AvatarFallback } from './styles'

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

const AvatarsRow = ({
  users,
  total,
  size,
  limit,
  onUserSelect,
  onTotalSelect,
  showTotalNumber,
  reverse: isReverse,
}) => {
  const handleUserSelect = useCallback(
    (e) => {
      const user = s2o(e.target.dataset.user)
      onUserSelect(user)
    },
    [onUserSelect],
  )

  if (users.length === 0) {
    return <span />
  }

  users = filter(validUser, getUniqueArray(users, 'id'))
  const sortedUsers = isReverse ? users : reverse(users)

  return (
    <Wrapper size={size} total={total}>
      {total <= 1 ? (
        <span />
      ) : (
        <MoreItem
          size={size}
          total={total}
          users={users}
          showTotalNumber={showTotalNumber}
          onTotalSelect={onTotalSelect}
        />
      )}

      {slice(0, limit, sortedUsers).map((user) => (
        <AvatarsItem key={user.id} size={size}>
          <Tooltip content={user.nickname} duration={0}>
            <AvatarsImg
              src={user.avatar}
              size={size}
              data-user={o2s(user)}
              onClick={handleUserSelect}
              fallback={
                <AvatarFallback size={size}>{user.nickname[0]}</AvatarFallback>
              }
            />
          </Tooltip>
        </AvatarsItem>
      ))}
    </Wrapper>
  )
}

AvatarsRow.propTypes = {
  users: T.arrayOf(
    T.shape({
      id: T.string,
      avatar: T.string,
      nickname: T.string,
      extra_id: T.string,
    }),
  ),
  size: T.oneOf(['small', 'medium']),
  total: T.number.isRequired,
  limit: T.number,
  onUserSelect: T.func,
  onTotalSelect: T.func,
  showTotalNumber: T.bool,
  reverse: T.bool,
}

AvatarsRow.defaultProps = {
  size: 'small',
  users: [],
  limit: AVATARS_LIST_LENGTH.POSTS,
  onUserSelect: log,
  onTotalSelect: log,
  showTotalNumber: false,
  reverse: true,
}

export default React.memo(AvatarsRow)
