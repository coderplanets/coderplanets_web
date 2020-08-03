/*
 *
 * FollowButton
 *
 */

import React, { useState, useCallback } from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'
import FollowingBtn from './FollowingBtn'
import FollowBtn from './FollowBtn'

/* eslint-disable-next-line */
const log = buildLog('c:FollowButton:index')

const FollowButton = ({
  hasFollowed,
  size,
  loading,
  userId,
  fakeLoading,
  onFollow,
  onUndoFollow,
}) => {
  const [simuLoading, setSimuLoading] = useState(false)
  const isLoading = fakeLoading ? simuLoading : loading

  const handleFollow = useCallback(() => {
    if (fakeLoading) {
      setSimuLoading(true)
      setTimeout(() => setSimuLoading(false), 1000)
    }
    onFollow(userId)
  }, [fakeLoading, onFollow, userId])

  const handleUndoFollow = useCallback(() => {
    if (fakeLoading) {
      setSimuLoading(true)
      setTimeout(() => setSimuLoading(false), 1000)
    }
    onUndoFollow(userId)
  }, [fakeLoading, onUndoFollow, userId])

  return (
    <>
      {hasFollowed ? (
        <FollowingBtn
          size={size}
          loading={isLoading}
          onClick={handleUndoFollow}
        />
      ) : (
        <FollowBtn size={size} loading={isLoading} onClick={handleFollow} />
      )}
    </>
  )
}

FollowButton.propTypes = {
  hasFollowed: T.bool,
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
  hasFollowed: false,
}

export default React.memo(FollowButton)
