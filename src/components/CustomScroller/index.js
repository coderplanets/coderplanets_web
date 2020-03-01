/*
 *
 * CustomScroller
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
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:CustomScroller:index')

// horizontal version
const CustomScroller = ({
  height,
  width,
  innerHeight,
  shadowSize,
  children,
}) => {
  const [showLeftShadow, setShowLeftShadow] = useState(false)
  const [showRightShadow, setShowRightShadow] = useState(true)

  const handleShowLeftShadow = useCallback(() => setShowLeftShadow(true), [])
  const handleHideLeftShadow = useCallback(() => setShowLeftShadow(false), [])

  const handleShowRightShadow = useCallback(() => setShowRightShadow(true), [])
  const handleHideRightShadow = useCallback(() => setShowRightShadow(false), [])

  const ref = useRef(null)
  useCustomScroll(ref, { scrollbars: { autoHide: 'never' } })

  return (
    <Wrapper height={height} width={width} shadowSize={shadowSize}>
      <LeftShadowBar
        show={showLeftShadow}
        height={height}
        shadowSize={shadowSize}
      />
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
      <RightShadowBar
        show={showRightShadow}
        height={height}
        shadowSize={shadowSize}
      />
    </Wrapper>
  )
}

CustomScroller.propTypes = {
  // https://www.npmjs.com/package/prop-types
  children: T.node.isRequired,
  height: T.string,
  width: T.string,
  shadowSize: T.oneOf(['small', 'medium', 'large']),
  // hack for custom scrollbar
  innerHeight: T.string,
}

CustomScroller.defaultProps = {
  height: '100%',
  width: '100%',
  shadowSize: 'small',
  innerHeight: '100%',
}

export default React.memo(CustomScroller)
