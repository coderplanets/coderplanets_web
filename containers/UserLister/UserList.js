/*
 *
 * UserList
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '../../config'
import { Pagi } from '../../components'

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

import FollowButton from './FollowButton'

import { makeDebugger, uid } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:UserList:index')
/* eslint-enable no-unused-vars */

const UsersTable = ({ entries, accountId }) => (
  <TableWrapper>
    {entries.map(user => (
      <UserWrapper key={uid.gen()}>
        <UserAvatar src={user.avatar} />
        <UserBrief>
          <Title>
            <Nickname>{user.nickname}</Nickname>
            <Location>
              <GeoIcon src={`${ICON_CMD}/city_map.svg`} />
              {user.location || user.geoCity || '--'}
            </Location>
          </Title>
          <Action>
            {accountId !== user.id ? (
              <FollowButton user={user} />
            ) : (
              <div>(本人)</div>
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
      left="-15px"
      pageNumber={pageNumber}
      pageSize={pageSize}
      totalCount={totalCount}
      onChange={onPageChange}
    />
  </React.Fragment>
)

UserList.propTypes = {
  // https://www.npmjs.com/package/prop-types
  data: PropTypes.shape({
    entries: PropTypes.array,
    pageNumber: PropTypes.number,
    pageSize: PropTypes.number,
    totalCount: PropTypes.number,
    totalPages: PropTypes.number,
  }),
  onPageChange: PropTypes.func,
  accountInfo: PropTypes.object.isRequired,
}

UserList.defaultProps = {
  data: {
    entries: [],
    pageNumber: 1,
    pageSize: 20,
    totalCount: 0,
    totalPages: 0,
  },
  onPageChange: debug,
}

export default UserList
