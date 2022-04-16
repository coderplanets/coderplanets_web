/*
 *
 * HorizontalScroller
 *
 */

import { FC, useState, useRef, useCallback, memo } from 'react'
import { useTheme } from 'styled-components'
import { Waypoint } from 'react-waypoint'
import type { TThemeMap } from '@/spec'

import useCustomScroll from '@/hooks/useCustomScroll'
// import ViewportTracker from '@/widgets/ViewportTracker'
import { SIZE } from '@/constant'

import type { TProps as TScrollProps } from './index'

import {
  Wrapper,
  //
  ScrollWrapper,
  InnerWrapper,
  LeftShadowBar,
  RightShadowBar,
} from './styles/horizontal_scroller'

type TProps = Omit<
  TScrollProps,
  | 'direction'
  | 'onTopEnter'
  | 'onTopLeave'
  | 'onBottomEnter'
  | 'onBottomLeave'
  | 'onScrollDirectionChange'
>

// horizontal version
const HorizontalScroller: FC<TProps> = ({
  height = '100%',
  width = '100%',
  innerHeight = '100%',
  showShadow = true,
  shadowSize = SIZE.SMALL,
  barSize = SIZE.SMALL,
  children,
  autoHide = true,
  withBorder = false,
}) => {
  const [showLeftShadow, setShowLeftShadow] = useState(false)
  const [showRightShadow, setShowRightShadow] = useState(true)

  const handleShowLeftShadow = useCallback(() => setShowLeftShadow(true), [])
  const handleHideLeftShadow = useCallback(() => setShowLeftShadow(false), [])

  const handleShowRightShadow = useCallback(() => setShowRightShadow(true), [])
  const handleHideRightShadow = useCallback(() => setShowRightShadow(false), [])

  const { _meta: themeMeta }: TThemeMap = useTheme()
  const { category: themeCategory } = themeMeta

  const ref = useRef(null)
  useCustomScroll(ref, {
    scrollbars: { autoHide: autoHide ? 'scroll' : 'never' },
    themeCategory,
  })

  return (
    <Wrapper height={height} width={width} barSize={barSize}>
      {showShadow && (
        <LeftShadowBar
          show={showLeftShadow}
          height={height}
          shadowSize={shadowSize}
          withBorder={withBorder}
        />
      )}

      <ScrollWrapper ref={ref}>
        <InnerWrapper innerHeight={innerHeight}>
          {/*  @ts-ignore */}
          <Waypoint
            horizontal
            onEnter={handleHideLeftShadow}
            onLeave={handleShowLeftShadow}
          />
          {children}
          {/*  @ts-ignore */}
          <Waypoint
            horizontal
            onEnter={handleHideRightShadow}
            onLeave={handleShowRightShadow}
          />
        </InnerWrapper>
      </ScrollWrapper>
      {showShadow && (
        <RightShadowBar
          show={showRightShadow}
          height={height}
          shadowSize={shadowSize}
          withBorder={withBorder}
        />
      )}
    </Wrapper>
  )
}

export default memo(HorizontalScroller)
