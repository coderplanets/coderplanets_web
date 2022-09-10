/*
 * FollowButton
 */

import { FC, memo, useState, useCallback } from 'react'

import type { TID, TSizeTSM } from '@/spec'
import { SIZE } from '@/constant'
import useAccount from '@/hooks/useAccount'

import { buildLog } from '@/utils/logger'
import { authWarn } from '@/utils/helper'

import FollowingBtn from './FollowingBtn'
import FollowedBtn from './FollowedBtn'

/* eslint-disable-next-line */
const log = buildLog('w:FollowButton:index')

type TProps = {
  hasFollowed?: boolean
  userLogin?: TID
  size?: TSizeTSM
  loading?: boolean
  simuLoading?: boolean
  followText?: string
  followingText?: string
  followingOffset?: number
  onFollow?: (userLogin: TID) => void
  onUndoFollow?: (userLogin: TID) => void
}

const FollowButton: FC<TProps> = ({
  userLogin,
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

  const accountInfo = useAccount()
  const isValidSession = !!accountInfo

  const handleFollow = useCallback(() => {
    if (!isValidSession) return authWarn()

    if (simuLoading) {
      setFakeLoading(true)
      setTimeout(() => setFakeLoading(false), 1500)
    }
    onFollow(userLogin)
  }, [simuLoading, onFollow, userLogin, isValidSession])

  const handleUndoFollow = useCallback(() => {
    if (!isValidSession) return authWarn()

    if (simuLoading) {
      setFakeLoading(true)
      setTimeout(() => setFakeLoading(false), 1500)
    }
    onUndoFollow(userLogin)
  }, [simuLoading, onUndoFollow, userLogin, isValidSession])

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
