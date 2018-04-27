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
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:AvatarsRow:index')
/* eslint-enable no-unused-vars */

const AvatarsRow = ({ users, total, height }) => (
  <Avatars height={height}>
    {total >= users.length ? (
      <span />
    ) : (
      <AvatarsItem>
        <AvatarsMore>{prettyNum(total)}</AvatarsMore>
      </AvatarsItem>
    )}

    {R.reverse(users).map(user => (
      <AvatarsItem key={shortid.generate()}>
        <Tooltip title={user.nickname}>
          <AvatarsImg src={user.avatar} />
        </Tooltip>
      </AvatarsItem>
    ))}
  </Avatars>
)

AvatarsRow.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      nickname: PropTypes.string,
    })
  ).isRequired,
  total: PropTypes.number.isRequired,
  height: PropTypes.string,
}

AvatarsRow.defaultProps = {
  height: '32px',
}

export default AvatarsRow
