/*
 *
 * VerticalScroller
 *
 */

// import React, { useState, useRef, useCallback } from 'react'
import React, { useRef } from 'react'
// import { Waypoint } from 'react-waypoint'
import T from 'prop-types'

import { buildLog } from '@utils'
import { useCustomScroll } from '@hooks'

import {
  Wrapper,
  //
  ScrollWrapper,
  // LeftShadowBar,
  // RightShadowBar,
} from './styles/horizontal_scroller'

/* eslint-disable-next-line */
const log = buildLog('c:CustomScroller:index')

// horizontal version
const VerticalScroller = ({
  height,
  width,
  shadowSize,
  children,
  autoHide,
}) => {
  // const [showLeftShadow, setShowLeftShadow] = useState(false)
  // const [showRightShadow, setShowRightShadow] = useState(true)

  // const handleShowLeftShadow = useCallback(() => setShowLeftShadow(true), [])
  // const handleHideLeftShadow = useCallback(() => setShowLeftShadow(false), [])

  // const handleShowRightShadow = useCallback(() => setShowRightShadow(true), [])
  // const handleHideRightShadow = useCallback(() => setShowRightShadow(false), [])

  const ref = useRef(null)
  useCustomScroll(ref, {
    scrollbars: { autoHide: autoHide ? 'scroll' : 'never' },
  })

  return (
    <Wrapper height={height} width={width} shadowSize={shadowSize}>
      {/* <LeftShadowBar
        show={showLeftShadow}
        height={height}
        shadowSize={shadowSize}
      /> */}
      <ScrollWrapper ref={ref}>
        {/* <Waypoint
            horizontal
            onEnter={handleHideLeftShadow}
            onLeave={handleShowLeftShadow}
          /> */}
        {children}
        {/* <Waypoint
            horizontal
            onEnter={handleHideRightShadow}
            onLeave={handleShowRightShadow}
          /> */}
      </ScrollWrapper>
      {/* <RightShadowBar
        show={showRightShadow}
        height={height}
        shadowSize={shadowSize}
      /> */}
    </Wrapper>
  )
}

VerticalScroller.propTypes = {
  // https://www.npmjs.com/package/prop-types
  children: T.node.isRequired,
  height: T.string,
  width: T.string,
  shadowSize: T.oneOf(['small', 'medium', 'large']),
  // hack for custom scrollbar
  autoHide: T.bool,
}

VerticalScroller.defaultProps = {
  height: '100%',
  width: '100%',
  shadowSize: 'small',
  autoHide: true,
}

export default React.memo(VerticalScroller)
