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
  fakeLoading?: boolean
  followText?: string
  followingText?: string
  onFollow?: (userId: TID) => void
  onUndoFollow?: (userId: TID) => void
}

const FollowButton: FC<TProps> = ({
  userId,
  size = SIZE.SMALL,
  fakeLoading = false,
  loading = false,
  hasFollowed = false,
  followText = '关 注',
  followingText = '已关注',
  onFollow = log,
  onUndoFollow = log,
}) => {
  const [simuLoading, setSimuLoading] = useState(false)
  const isLoading = fakeLoading ? simuLoading : loading

  const handleFollow = useCallback(() => {
    if (fakeLoading) {
      setSimuLoading(true)
      setTimeout(() => setSimuLoading(false), 1500)
    }
    onFollow(userId)
  }, [fakeLoading, onFollow, userId])

  const handleUndoFollow = useCallback(() => {
    if (fakeLoading) {
      setSimuLoading(true)
      setTimeout(() => setSimuLoading(false), 1500)
    }
    onUndoFollow(userId)
  }, [fakeLoading, onUndoFollow, userId])

  return (
    <>
      {hasFollowed ? (
        <FollowingBtn
          size={size}
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
