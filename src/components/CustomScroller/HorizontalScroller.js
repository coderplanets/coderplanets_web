/*
 *
 * HorizontalScroller
 *
 */

import React, { useState, useRef, useCallback } from 'react'
import { Waypoint } from 'react-waypoint'
import T from 'prop-types'

import { buildLog } from '@utils'
import { useCustomScroll } from '@hooks'

import {
  Wrapper,
  //
  ScrollWrapper,
  InnerWrapper,
  LeftShadowBar,
  RightShadowBar,
} from './styles/horizontal_scroller'

/* eslint-disable-next-line */
const log = buildLog('c:CustomScroller:index')

// horizontal version
const HorizontalScroller = ({
  height,
  width,
  innerHeight,
  showShadow,
  shadowSize,
  children,
  autoHide,
  withBorder,
}) => {
  const [showLeftShadow, setShowLeftShadow] = useState(false)
  const [showRightShadow, setShowRightShadow] = useState(true)

  const handleShowLeftShadow = useCallback(() => setShowLeftShadow(true), [])
  const handleHideLeftShadow = useCallback(() => setShowLeftShadow(false), [])

  const handleShowRightShadow = useCallback(() => setShowRightShadow(true), [])
  const handleHideRightShadow = useCallback(() => setShowRightShadow(false), [])

  const ref = useRef(null)
  useCustomScroll(ref, {
    scrollbars: { autoHide: autoHide ? 'scroll' : 'never' },
  })

  return (
    <Wrapper height={height} width={width} shadowSize={shadowSize}>
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
          <Waypoint
            horizontal
            onEnter={handleHideLeftShadow}
            onLeave={handleShowLeftShadow}
          />
          {children}
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

HorizontalScroller.propTypes = {
  children: T.node.isRequired,
  height: T.string,
  width: T.string,
  showShadow: T.bool,
  shadowSize: T.oneOf(['small', 'medium', 'large']),
  // hack for custom scrollbar
  innerHeight: T.string,
  autoHide: T.bool,
  withBorder: T.bool,
}

HorizontalScroller.defaultProps = {
  height: '100%',
  width: '100%',
  showShadow: true,
  shadowSize: 'small',
  innerHeight: '100%',
  autoHide: false,
  withBorder: false,
}

export default React.memo(HorizontalScroller)
