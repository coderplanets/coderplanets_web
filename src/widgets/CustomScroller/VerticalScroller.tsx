/*
 *
 * VerticalScroller
 *
 */

import { FC, useState, useRef, useCallback, memo } from 'react'
import { useTheme } from 'styled-components'

// NOTE: do not use ViewportTracker here, it cause crash
import { Waypoint } from 'react-waypoint'
import type { TThemeMap } from '@/spec'

import { SIZE } from '@/constant'
import { debounce } from '@/utils/helper'
import useCustomScroll from '@/hooks/useCustomScroll'
// import ViewportTracker from '@/widgets/ViewportTracker'

import type { TProps as TScrollProps } from './index'

import {
  Wrapper,
  //
  ScrollWrapper,
  TopShadowBar,
  BottomShadowBar,
} from './styles/vertical_scroller'

type TProps = Omit<TScrollProps, 'direction' | 'innerHeight'>

// vertical version
const VerticalScroller: FC<TProps> = ({
  height = '100%',
  width = '100%',
  showShadow = true,
  shadowSize = SIZE.SMALL,
  barSize = SIZE.SMALL,
  children,
  autoHide = true,
  showOnHover = false,
  withBorder = false,
  onTopEnter,
  onTopLeave,
  onBottomEnter,
  onBottomLeave,
  onScrollDirectionChange,
  instanceKey = null,
}) => {
  const [showTopShadow, setShowTopShadow] = useState(false)
  const [showBottomShadow, setShowBottomShadow] = useState(true)

  // record last y position after scroll
  // to judge is scroll up or down
  // 记录上一次距离顶部的 y 轴位置，用于计算当前滑动是向上还是向下
  const [lastYPosition, setLastYPosition] = useState(0)

  const handleShowTopShadow = useCallback(() => {
    setShowTopShadow(true)
    onTopLeave?.()
  }, [onTopLeave])
  const handleHideTopShadow = useCallback(() => {
    setShowTopShadow(false)
    onTopEnter?.()
  }, [onTopEnter])

  const handleShowBottomShadow = useCallback(() => {
    setShowBottomShadow(true)
    onBottomLeave?.()
  }, [onBottomLeave])

  const handleHideBottomShadow = useCallback(() => {
    setShowBottomShadow(false)
    onBottomEnter?.()
  }, [onBottomEnter])

  const { _meta: themeMeta }: TThemeMap = useTheme()
  const { category: themeCategory } = themeMeta

  const ref = useRef(null)
  const scrollInstance = useCustomScroll(ref, {
    instanceKey,
    scrollbars: { autoHide: autoHide ? 'scroll' : 'never' },
    themeCategory,
    callbacks: {
      onScroll: debounce(() => {
        const position = scrollInstance?.scroll().position
        if (position) {
          const currentY = position.y

          currentY > lastYPosition
            ? onScrollDirectionChange?.('up')
            : onScrollDirectionChange?.('down')
        }
      }, 100),
      onScrollStart: () => {
        const position = scrollInstance?.scroll().position
        if (position) {
          const currentY = position.y
          setLastYPosition(currentY)

          currentY > lastYPosition
            ? onScrollDirectionChange?.('up')
            : onScrollDirectionChange?.('down')
        }
      },
      onScrollStop: () => {
        const position = scrollInstance?.scroll().position
        if (position) {
          const currentY = position.y
          currentY > lastYPosition
            ? onScrollDirectionChange?.('up')
            : onScrollDirectionChange?.('down')
        }
      },
    },
  })

  return (
    <Wrapper
      height={height}
      width={width}
      shadowSize={shadowSize}
      barSize={barSize}
      showOnHover={showOnHover}
    >
      {showShadow && (
        <TopShadowBar
          show={showTopShadow}
          height={height}
          shadowSize={shadowSize}
          withBorder={withBorder}
        />
      )}

      <ScrollWrapper ref={ref}>
        {/*  @ts-ignore */}
        <Waypoint onEnter={handleHideTopShadow} onLeave={handleShowTopShadow} />
        <div>{children}</div>
        {/*  @ts-ignore */}
        <Waypoint
          onEnter={handleHideBottomShadow}
          onLeave={handleShowBottomShadow}
        />
      </ScrollWrapper>

      {showShadow && (
        <BottomShadowBar
          show={showBottomShadow}
          height={height}
          shadowSize={shadowSize}
          withBorder={withBorder}
        />
      )}
    </Wrapper>
  )
}

export default memo(VerticalScroller)
