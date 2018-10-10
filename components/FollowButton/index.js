/*
 *
 * FollowButton
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

import { ICON_CMD } from '../../config'
import Popover from '../Popover'

import { BtnWrapper, WatchIcon, WatchedIcon, Popinfo } from './styles'

import { makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:FollowButton:index')
/* eslint-enable no-unused-vars */

const FollowButton = ({ userId, hasFollowd, size, onFollow, onUndoFollow }) => (
  <React.Fragment>
    {hasFollowd ? (
      <Popover
        placement="bottom"
        trigger="hover"
        content={<Popinfo>点击取消关注</Popinfo>}
      >
        <Button
          size={size}
          type="primary"
          ghost
          onClick={onUndoFollow.bind(this, userId)}
        >
          <BtnWrapper>
            <WatchedIcon src={`${ICON_CMD}/check2.svg`} />
            <div>已关注</div>
          </BtnWrapper>
        </Button>
      </Popover>
    ) : (
      <Button size={size} type="primary" onClick={onFollow.bind(this, userId)}>
        <BtnWrapper>
          <WatchIcon src={`${ICON_CMD}/plus_follow.svg`} />
          <div>关 注</div>
        </BtnWrapper>
      </Button>
    )}
  </React.Fragment>
)

FollowButton.propTypes = {
  hasFollowd: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  onFollow: PropTypes.func,
  onUndoFollow: PropTypes.func,
}

FollowButton.defaultProps = {
  size: 'small',
  onFollow: debug,
  onUndoFollow: debug,
}

export default FollowButton
