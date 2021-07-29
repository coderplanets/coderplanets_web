/*
 *
 * Upvote
 *
 */

import { FC, memo, useState, useCallback } from 'react'

import type { TUser, TUpvoteLayout } from '@/spec'
import { buildLog } from '@/utils'

import {
  Wrapper,
  ContentWrapper,
  IconWrapper,
  IconShadow,
  ShipWindow,
  ArticleShipWindow,
  UpIcon,
} from './styles/upvote_btn'

/* eslint-disable-next-line */
const log = buildLog('c:Upvote:index')

type TProps = {
  testid?: string
  type?: TUpvoteLayout
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
    <Wrapper showAnimation={showAnimation} type={type}>
      <ContentWrapper>
        <IconWrapper onClick={handleClick} type={type}>
          <IconShadow type={type} />
          {type === 'article' ? (
            <ArticleShipWindow />
          ) : (
            <ShipWindow type={type} />
          )}
          <UpIcon type={type} $active={viewerHasUpvoted} />
        </IconWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default memo(UpvoteBtn)
