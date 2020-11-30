/*
 *
 * FollowButton
 *
 */

import React, { useState, useCallback } from 'react'
import T from 'prop-types'
import { values } from 'ramda'

import { buildLog } from '@/utils'
import { SIZE } from '@/constant'

import FollowingBtn from './FollowingBtn'
import FollowedBtn from './FollowedBtn'

/* eslint-disable-next-line */
const log = buildLog('c:FollowButton:index')

const FollowButton = ({
  hasFollowed,
  size,
  loading,
  userId,
  fakeLoading,
  noBorderWhenFollowed,
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
          noBorderWhenFollowed={noBorderWhenFollowed}
        />
      ) : (
        <FollowedBtn size={size} loading={isLoading} onClick={handleFollow} />
      )}
    </>
  )
}

FollowButton.propTypes = {
  hasFollowed: T.bool,
  userId: T.string.isRequired,
  size: T.oneOf(values(SIZE)),
  onFollow: T.func,
  onUndoFollow: T.func,
  fakeLoading: T.bool,
  loading: T.bool,
  noBorderWhenFollowed: T.bool,
}

FollowButton.defaultProps = {
  size: SIZE.SMALL,
  onFollow: log,
  onUndoFollow: log,
  fakeLoading: false,
  loading: false,
  hasFollowed: false,
  noBorderWhenFollowed: false,
}

export default React.memo(FollowButton)
