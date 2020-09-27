/*
 *
 * ArrowButtons
 *
 */

import React, { useRef, useState, useEffect } from 'react'
import T from 'prop-types'

import { ICON } from '@/config'
import { buildLog } from '@/utils'

import { Wrapper, Text, LeftIcon, RightIcon } from './styles/arrow_button'

/* eslint-disable-next-line */
const log = buildLog('c:Buttons:index')

const ArrowButton = ({
  children,
  onClick,
  size,
  direction,
  dimWhenIdle,
  arrowStyle,
}) => {
  const iconSrc =
    arrowStyle === 'default' ? `${ICON}/arrow.svg` : `${ICON}/arrow-simple.svg`

  const leftTextRef = useRef(null)
  const rightTextRef = useRef(null)

  const [leftChildWidth, setLeftTextWidth] = useState(50)
  const [rightChildWidth, setRightTextWidth] = useState(50)

  useEffect(() => {
    if (leftTextRef) {
      setLeftTextWidth(leftTextRef.current?.clientWidth)
    }
  }, [leftTextRef])

  useEffect(() => {
    if (rightTextRef) {
      setRightTextWidth(rightTextRef.current?.clientWidth)
    }
  }, [rightTextRef])

  const textWidth = direction === 'left' ? leftChildWidth : rightChildWidth

  return (
    <Wrapper
      onClick={onClick}
      dimWhenIdle={dimWhenIdle}
      size={size}
      width={textWidth}
    >
      {direction === 'left' ? (
        <>
          <LeftIcon arrowStyle={arrowStyle} size={size} src={iconSrc} />
          <Text ref={leftTextRef} size={size}>
            {children}
          </Text>
        </>
      ) : (
        <>
          <Text ref={rightTextRef} size={size}>
            {children}
          </Text>
          <RightIcon arrowStyle={arrowStyle} size={size} src={iconSrc} />
        </>
      )}
    </Wrapper>
  )
}

ArrowButton.propTypes = {
  children: T.oneOfType([T.string, T.node]),
  arrowStyle: T.oneOf(['default', 'simple']),
  size: T.oneOf(['tiny', 'small', 'medium', 'large']),
  direction: T.oneOf(['left', 'right']),
  dimWhenIdle: T.bool,
  onClick: T.func,
}

ArrowButton.defaultProps = {
  children: '下一步',
  arrowStyle: 'default',
  size: 'small',
  direction: 'right',
  dimWhenIdle: false,
  onClick: log,
}

export default React.memo(ArrowButton)
