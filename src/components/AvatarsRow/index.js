/*
 *
 * AvatarsRow
 *
 */

import React, { useCallback } from 'react'
import T from 'prop-types'
import R from 'ramda'

import { ATATARS_LIST_LENGTH } from '@/config'
import { buildLog, o2s, s2o } from '@/utils'

import Tooltip from '@/components/Tooltip'
import MoreItem from './MoreItem'

import {
  Wrapper,
  AvatarsItem,
  // MoreItem,
  AvatarsImg,
  AvatarFallback,
  // AvatarsMore,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:AvatarsRow:index')

const validUser = R.compose(R.not, R.isNil)

const getUniqueArray = (arr, comp) => {
  const unique = arr
    .map(e => e[comp])

    // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the dead keys & store unique objects
    .filter(e => arr[e])
    .map(e => arr[e])

  return unique
}

const AvatarsRow = ({
  users,
  total,
  height,
  limit,
  onUserSelect,
  onTotalSelect,
  showTotalNumber,
  reverse,
}) => {
  const handleUserSelect = useCallback(
    e => {
      const user = s2o(e.target.dataset.user)
      onUserSelect(user)
    },
    [onUserSelect]
  )

  if (users.length === 0) {
    return <span />
  }

  users = R.filter(validUser, getUniqueArray(users, 'id'))
  const sortedUsers = reverse ? users : R.reverse(users)

  return (
    <Wrapper height={height}>
      {total <= 1 ? (
        <span />
      ) : (
        <MoreItem
          total={total}
          users={users}
          showTotalNumber={showTotalNumber}
          onTotalSelect={onTotalSelect}
        />
      )}

      {R.slice(0, limit, sortedUsers).map(user => (
        <AvatarsItem key={user.id}>
          <Tooltip content={user.nickname} duration={0}>
            <AvatarsImg
              src={user.avatar}
              data-user={o2s(user)}
              onClick={handleUserSelect}
              fallback={<AvatarFallback>{user.nickname[0]}</AvatarFallback>}
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
    })
  ),
  total: T.number.isRequired,
  height: T.string,
  limit: T.number,
  onUserSelect: T.func,
  onTotalSelect: T.func,
  showTotalNumber: T.bool,
  reverse: T.bool,
}

AvatarsRow.defaultProps = {
  height: '32px',
  users: [],
  limit: ATATARS_LIST_LENGTH.POSTS,
  onUserSelect: log,
  onTotalSelect: log,
  showTotalNumber: false,
  reverse: true,
}

export default React.memo(AvatarsRow)
