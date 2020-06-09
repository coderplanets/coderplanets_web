/*
 *
 * UserList
 *
 */

import React from 'react'
import T from 'prop-types'

import Pagi from '@/components/Pagi'
import FollowButton from '@/components/FollowButton'
import { ICON_CMD } from '@/config'

import { buildLog, cutFrom } from '@/utils'
import {
  TableWrapper,
  UserWrapper,
  UserAvatar,
  UserBrief,
  Title,
  Nickname,
  Location,
  GeoIcon,
  Action,
} from './styles/user_list'

import { onFollow, undoFollow } from './logic'

/* eslint-disable-next-line */
const log = buildLog('c:UserList:index')

const UsersTable = ({ entries, accountId }) => (
  <TableWrapper>
    {entries.map((user) => (
      <UserWrapper key={user.id}>
        <UserAvatar src={user.avatar} />
        <UserBrief>
          <Title>
            <Nickname>{user.nickname}</Nickname>
            <Location>
              <GeoIcon src={`${ICON_CMD}/city_map.svg`} />
              {cutFrom(user.location || user.geoCity || '--', 16)}
            </Location>
          </Title>
          <Action>
            {accountId !== user.id ? (
              <FollowButton
                hasFollowed={user.viewerHasFollowed}
                userId={user.id}
                onFollow={onFollow}
                onUndoFollow={undoFollow}
                fakeLoading
              />
            ) : (
              <div>(本尊)</div>
            )}
          </Action>
        </UserBrief>
      </UserWrapper>
    ))}
  </TableWrapper>
)

const UserList = ({
  accountInfo,
  data: { entries, pageNumber, pageSize, totalCount },
  onPageChange,
}) => (
  <React.Fragment>
    <UsersTable entries={entries} accountId={accountInfo.id} />
    <Pagi
      margin={{ left: '-20px' }}
      pageNumber={pageNumber}
      pageSize={pageSize}
      totalCount={totalCount}
      onChange={onPageChange}
    />
  </React.Fragment>
)

UserList.propTypes = {
  // https://www.npmjs.com/package/prop-types
  data: T.shape({
    entries: T.array,
    pageNumber: T.number,
    pageSize: T.number,
    totalCount: T.number,
    totalPages: T.number,
  }),
  onPageChange: T.func,
  accountInfo: T.object.isRequired,
}

UserList.defaultProps = {
  data: {
    entries: [],
    pageNumber: 1,
    pageSize: 20,
    totalCount: 0,
    totalPages: 0,
  },
  onPageChange: log,
}

export default UserList
