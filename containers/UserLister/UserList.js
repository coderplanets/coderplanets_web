/*
 *
 * UserList
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Button, Icon } from 'antd'

import { Pagi } from '../../components'

import {
  TableWrapper,
  UserWrapper,
  UserAvatar,
  UserBrief,
  Nickname,
  Bio,
  Location,
  Action,
} from './styles/user_list'

import { makeDebugger, uid } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:UserList:index')
/* eslint-enable no-unused-vars */

const UsersTable = ({ entries }) => (
  <TableWrapper>
    {entries.map(user => (
      <UserWrapper key={uid.gen()}>
        <UserAvatar src={user.avatar} />
        <UserBrief>
          <Nickname>{user.nickname}</Nickname>
          <Bio>{user.bio}</Bio>
          <Location>
            <Icon type="environment-o" />
            {user.location}
          </Location>
        </UserBrief>
        <Action>
          <Button size="small" type="primary" ghost>
            <Icon type="user-add" />
            关注
          </Button>
        </Action>
      </UserWrapper>
    ))}
  </TableWrapper>
)

const UserList = ({
  data: { entries, pageNumber, pageSize, totalCount },
  onPageChange,
}) => (
  <React.Fragment>
    <UsersTable entries={entries} />
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
