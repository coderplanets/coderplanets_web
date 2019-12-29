/*
 *
 * AvatarsRow
 *
 */

import React from 'react'
import T from 'prop-types'
import R from 'ramda'

// eslint-disable-next-line import/named
import { ATATARS_LIST_LENGTH } from '@config'
import { buildLog, prettyNum } from '@utils'

import Tooltip from '@components/Tooltip'

import {
  Wrapper,
  AvatarsItem,
  MoreItem,
  AvatarsImg,
  AvatarsMore,
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
  reverse,
}) => {
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
        <MoreItem onClick={onTotalSelect.bind(this, { users, total })}>
          <Tooltip content={`所有评论共 ${total} 条`}>
            <AvatarsMore total={total}>{prettyNum(total)}</AvatarsMore>
          </Tooltip>
        </MoreItem>
      )}

      {R.slice(0, limit, sortedUsers).map(user => (
        <AvatarsItem key={user.id} onClick={onUserSelect.bind(this, user)}>
          <Tooltip content={user.nickname} delay={200}>
            <AvatarsImg src={user.avatar} />
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
  reverse: T.bool,
}

AvatarsRow.defaultProps = {
  height: '32px',
  users: [],
  limit: ATATARS_LIST_LENGTH.POSTS,
  onUserSelect: log,
  onTotalSelect: log,
  reverse: true,
}

export default AvatarsRow
