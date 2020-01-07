/*
 *
 * FollowButton
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'
import FollowingBtn from './FollowingBtn'
import FollowBtn from './FollowBtn'

/* eslint-disable-next-line */
const log = buildLog('c:FollowButton:index')

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
    const { hasFollowed, size, loading, fakeLoading } = this.props
    const { simuLoading } = this.state
    const isLoading = fakeLoading ? simuLoading : loading

    return (
      <React.Fragment>
        {hasFollowed ? (
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
  hasFollowed: T.bool.isRequired,
  userId: T.string.isRequired,
  size: T.oneOf(['small', 'default', 'large']),
  onFollow: T.func,
  onUndoFollow: T.func,
  fakeLoading: T.bool,
  loading: T.bool,
}

FollowButton.defaultProps = {
  size: 'small',
  onFollow: log,
  onUndoFollow: log,
  fakeLoading: false,
  loading: false,
}

export default FollowButton
