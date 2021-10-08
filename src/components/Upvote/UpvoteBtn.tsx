/*
 *
 * Upvote
 *
 */

import { FC, memo, useState, useCallback } from 'react'

import type { TUpvoteLayout } from '@/spec'
import { buildLog } from '@/utils/logger'

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
  type?: TUpvoteLayout
  viewerHasUpvoted?: boolean
  onAction: (viewerHasUpvoted: boolean) => void
}

const UpvoteBtn: FC<TProps> = ({
  type = 'default',
  viewerHasUpvoted = false,
  onAction,
}) => {
  const [showAnimation, setShowAnimation] = useState(false)
  const [num, setNum] = useState(0)

  const handleClick = useCallback(() => {
    onAction(!viewerHasUpvoted)
    if (viewerHasUpvoted) return
    setNum(num + 1)

    if (!showAnimation) {
      setShowAnimation(true)

      setTimeout(() => setShowAnimation(false), 950)
    }
  }, [showAnimation, viewerHasUpvoted, num, onAction])

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
