/*
 *
 * AvatarsRow
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import { Tooltip } from 'antd'
import R from 'ramda'

import { makeDebugger, prettyNum } from '../../utils'
import { Avatars, AvatarsItem, AvatarsImg, AvatarsMore } from './style'
import { ATATARS_LIST_LENGTH } from '../../config/general'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:AvatarsRow:index')
/* eslint-enable no-unused-vars */

const AvatarsRow = ({
  users,
  total,
  height,
  limit,
  onUserSelect,
  onTotalSelect,
}) => {
  if (users.length === 0) {
    return <span />
  }

  return (
    <Avatars height={height}>
      {total <= users.length ? (
        <span />
      ) : (
        <AvatarsItem onClick={onTotalSelect.bind(this, { users, total })}>
          <AvatarsMore>{prettyNum(total)}</AvatarsMore>
        </AvatarsItem>
      )}

      {R.slice(0, limit, R.reverse(users)).map(user => (
        <AvatarsItem
          key={shortid.generate()}
          onClick={onUserSelect.bind(this, user)}
        >
          <Tooltip title={user.nickname}>
            <AvatarsImg src={user.avatar} />
          </Tooltip>
        </AvatarsItem>
      ))}
    </Avatars>
  )
}

AvatarsRow.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      avatar: PropTypes.string,
      nickname: PropTypes.string,
      extra_id: PropTypes.string,
    })
  ),
  total: PropTypes.number.isRequired,
  height: PropTypes.string,
  limit: PropTypes.number,
  onUserSelect: PropTypes.func,
  onTotalSelect: PropTypes.func,
}

AvatarsRow.defaultProps = {
  height: '32px',
  users: [],
  limit: ATATARS_LIST_LENGTH.POSTS,
  onUserSelect: debug,
  onTotalSelect: debug,
}

export default AvatarsRow
