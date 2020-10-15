/*
 *
 * VerticalScroller
 *
 */

import React, { useState, useRef, useCallback } from 'react'
import { useTheme } from 'styled-components'
import { Waypoint } from 'react-waypoint'
import T from 'prop-types'

import { buildLog } from '@/utils'
import { useCustomScroll } from '@/hooks'

import {
  Wrapper,
  //
  ScrollWrapper,
  TopShadowBar,
  BottomShadowBar,
} from './styles/vertical_scroller'

/* eslint-disable-next-line */
const log = buildLog('c:CustomScroller:index')

// horizontal version
const VerticalScroller = ({
  height,
  width,
  showShadow,
  shadowSize,
  barSize,
  children,
  autoHide,
  showOnHover,
  withBorder,
  onTopEnter,
  onTopLeave,
  onBottomEnter,
  onBottomLeave,
}) => {
  const [showTopShadow, setShowTopShadow] = useState(false)
  const [showBottomShadow, setShowBottomShadow] = useState(true)

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

  const {
    _meta: { category: themeCategory },
  } = useTheme()

  const ref = useRef(null)
  useCustomScroll(ref, {
    scrollbars: { autoHide: autoHide ? 'scroll' : 'never' },
    themeCategory,
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
        <Waypoint onEnter={handleHideTopShadow} onLeave={handleShowTopShadow} />
        {children}
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

VerticalScroller.propTypes = {
  children: T.node.isRequired,
  height: T.string,
  width: T.string,
  showShadow: T.bool,
  shadowSize: T.oneOf(['small', 'medium', 'large']),
  barSize: T.oneOf(['small', 'medium', 'large']),
  // hack for custom scrollbar
  autoHide: T.bool,
  showOnHover: T.bool,
  withBorder: T.bool,
  onTopEnter: T.oneOfType([T.func, T.instanceOf(null)]),
  onTopLeave: T.oneOfType([T.func, T.instanceOf(null)]),
  onBottomEnter: T.oneOfType([T.func, T.instanceOf(null)]),
  onBottomLeave: T.oneOfType([T.func, T.instanceOf(null)]),
}

VerticalScroller.defaultProps = {
  height: '100%',
  width: '100%',
  showShadow: true,
  shadowSize: 'small',
  barSize: 'small',
  autoHide: true,
  showOnHover: false,
  withBorder: false,
  onTopEnter: null,
  onTopLeave: null,
  onBottomEnter: null,
  onBottomLeave: null,
}

export default React.memo(VerticalScroller)
