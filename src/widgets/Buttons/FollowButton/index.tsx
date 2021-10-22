/*
 * FollowButton
 */

import { FC, memo, useState, useCallback } from 'react'

import { TID, TSIZE_TSM } from '@/spec'
import { buildLog } from '@/utils/logger'
import { SIZE } from '@/constant'

import FollowingBtn from './FollowingBtn'
import FollowedBtn from './FollowedBtn'

/* eslint-disable-next-line */
const log = buildLog('c:FollowButton:index')

type TProps = {
  hasFollowed?: boolean
  userId?: TID
  size?: TSIZE_TSM
  loading?: boolean
  simuLoading?: boolean
  followText?: string
  followingText?: string
  followingOffset?: number
  onFollow?: (userId: TID) => void
  onUndoFollow?: (userId: TID) => void
}

const FollowButton: FC<TProps> = ({
  userId,
  size = SIZE.SMALL,
  simuLoading = true,
  loading = false,
  hasFollowed = false,
  followText = '关 注',
  followingText = '已关注',
  followingOffset = 0,
  onFollow = log,
  onUndoFollow = log,
}) => {
  const [fakeLoading, setFakeLoading] = useState(false)
  const isLoading = simuLoading ? fakeLoading : loading

  const handleFollow = useCallback(() => {
    if (simuLoading) {
      setFakeLoading(true)
      setTimeout(() => setFakeLoading(false), 1500)
    }
    onFollow(userId)
  }, [simuLoading, onFollow, userId])

  const handleUndoFollow = useCallback(() => {
    if (simuLoading) {
      setFakeLoading(true)
      setTimeout(() => setFakeLoading(false), 1500)
    }
    onUndoFollow(userId)
  }, [simuLoading, onUndoFollow, userId])

  return (
    <>
      {hasFollowed ? (
        <FollowingBtn
          size={size}
          followingOffset={followingOffset}
          loading={isLoading}
          text={followingText}
          onClick={handleUndoFollow}
        />
      ) : (
        <FollowedBtn
          size={size}
          loading={isLoading}
          text={followText}
          onClick={handleFollow}
        />
      )}
    </>
  )
}

export default memo(FollowButton)
