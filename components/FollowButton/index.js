/*
 *
 * FollowButton
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import FollowingBtn from './FollowingBtn'
import FollowBtn from './FollowBtn'

import { makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:FollowButton:index')
/* eslint-enable no-unused-vars */

class FollowButton extends React.Component {
  state = { loading: false }

  onFollow() {
    const { userId, onFollow } = this.props
    debug('onFollow :', userId)

    this.fakeLoading()
    onFollow(userId)
  }

  onUndoFollow() {
    const { userId, onUndoFollow } = this.props

    debug('onUndoFollow :', userId)

    this.fakeLoading()
    onUndoFollow(userId)
  }

  fakeLoading() {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000)
  }

  render() {
    const { hasFollowd, size } = this.props
    const { loading } = this.state

    return (
      <React.Fragment>
        {hasFollowd ? (
          <FollowingBtn
            size={size}
            loading={loading}
            onClick={this.onUndoFollow.bind(this)}
          />
        ) : (
          <FollowBtn
            size={size}
            loading={loading}
            onClick={this.onFollow.bind(this)}
          />
        )}
      </React.Fragment>
    )
  }
}

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
