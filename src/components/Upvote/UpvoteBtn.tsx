/*
 *
 * Upvote
 *
 */

import { FC, memo, useState, useCallback } from 'react'

import type { TUser, TUpvote } from '@/spec'
import { ICON } from '@/config'
import { buildLog } from '@/utils'

import {
  Wrapper,
  ContentWrapper,
  IconWrapper,
  IconShadow,
  ShipWindow,
  StickerShipWindow,
  UpIcon,
} from './styles/upvote_btn'

/* eslint-disable-next-line */
const log = buildLog('c:Upvote:index')

type TProps = {
  testid?: string
  type?: TUpvote
  num?: number
  viewerHasUpvoted?: boolean
  alias?: string
  avatarList?: TUser[]
}

const UpvoteBtn: FC<TProps> = ({
  type = 'default',
  viewerHasUpvoted = false,
}) => {
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
        <IconWrapper onClick={handleClick} type={type}>
          <IconShadow type={type} />
          {type === 'sticker' ? <StickerShipWindow /> : <ShipWindow />}
          <UpIcon
            type={type}
            src={`${ICON}/shape/upvote-ship.svg`}
            $active={viewerHasUpvoted}
          />
        </IconWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default memo(UpvoteBtn)
