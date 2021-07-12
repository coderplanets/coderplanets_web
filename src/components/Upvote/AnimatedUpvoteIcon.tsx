/*
 *
 * Upvote
 *
 */

import { FC, memo, useState, useCallback } from 'react'

import type { TUser } from '@/spec'
import { ICON } from '@/config'
import { buildLog } from '@/utils'

import {
  Wrapper,
  ContentWrapper,
  IconWrapper,
  IconShadow,
  UpIcon,
} from './styles/animated_upvote_icon'

/* eslint-disable-next-line */
const log = buildLog('c:Upvote:index')

type TProps = {
  testid?: string
  num?: number
  viewerHasUpvoted?: boolean
  alias?: string
  avatarList?: TUser[]
}

const AnimatedUpvoteIcon: FC<TProps> = ({ viewerHasUpvoted = false }) => {
  const [showAnimation, setShowAnimation] = useState(false)
  const [num, setNum] = useState(0)

  const handleClick = useCallback(() => {
    if (viewerHasUpvoted) return
    setNum(num + 1)

    if (!showAnimation) {
      setShowAnimation(true)

      setTimeout(() => setShowAnimation(false), 950)
    }
  }, [showAnimation, viewerHasUpvoted, num])

  return (
    <Wrapper showAnimation={showAnimation}>
      <ContentWrapper>
        <IconWrapper onClick={handleClick}>
          <IconShadow />
          <UpIcon src={`${ICON}/shape/upvote.svg`} $active={viewerHasUpvoted} />
        </IconWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default memo(AnimatedUpvoteIcon)
