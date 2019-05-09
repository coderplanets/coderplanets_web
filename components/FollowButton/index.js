/*
 *
 * FollowButton
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { makeDebugger } from '@utils'
import FollowingBtn from './FollowingBtn'
import FollowBtn from './FollowBtn'

/* eslint-disable-next-line */
const debug = makeDebugger('c:FollowButton:index')

class FollowButton extends React.Component {
  state = { simuLoading: false }

  onFollow() {
    const { userId, onFollow, fakeLoading } = this.props

    if (fakeLoading) {
      this.doFakeLoading()
    }
    onFollow(userId)
  }

  onUndoFollow() {
    const { userId, onUndoFollow, fakeLoading } = this.props

    if (fakeLoading) {
      this.doFakeLoading()
    }
    onUndoFollow(userId)
  }

  doFakeLoading() {
    this.setState({ simuLoading: true })
    setTimeout(() => {
      this.setState({ simuLoading: false })
    }, 1000)
  }

  render() {
    const { hasFollowd, size, loading, fakeLoading } = this.props
    const { simuLoading } = this.state
    const isLoading = fakeLoading ? simuLoading : loading

    return (
      <React.Fragment>
        {hasFollowd ? (
          <FollowingBtn
            size={size}
            loading={isLoading}
            onClick={this.onUndoFollow.bind(this)}
          />
        ) : (
          <FollowBtn
            size={size}
            loading={isLoading}
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
  fakeLoading: PropTypes.bool,
  loading: PropTypes.bool,
}

FollowButton.defaultProps = {
  size: 'small',
  onFollow: debug,
  onUndoFollow: debug,
  fakeLoading: false,
  loading: false,
}

export default FollowButton
