/*
 *
 * ArrowButtons
 *
 */

import React, { useRef, useState, useEffect } from 'react'
import T from 'prop-types'
import { values } from 'ramda'

import { ICON } from '@/config'
import { SIZE } from '@/constant'
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
  disabled,
}) => {
  const iconSrc =
    arrowStyle === 'default'
      ? `${ICON}/shape/arrow.svg`
      : `${ICON}/shape/arrow-simple.svg`

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
      onClick={() => !disabled && onClick()}
      dimWhenIdle={dimWhenIdle}
      size={size}
      width={textWidth}
      disabled={disabled}
    >
      {direction === 'left' ? (
        <>
          <LeftIcon
            arrowStyle={arrowStyle}
            size={size}
            src={iconSrc}
            disabled={disabled}
          />
          <Text ref={leftTextRef} size={size}>
            {children}
          </Text>
        </>
      ) : (
        <>
          <Text ref={rightTextRef} size={size}>
            {children}
          </Text>
          <RightIcon
            arrowStyle={arrowStyle}
            size={size}
            src={iconSrc}
            disabled={disabled}
          />
        </>
      )}
    </Wrapper>
  )
}

ArrowButton.propTypes = {
  children: T.oneOfType([T.string, T.node]),
  arrowStyle: T.oneOf(['default', 'simple']),
  size: T.oneOf(values(SIZE)),
  direction: T.oneOf(['left', 'right']),
  dimWhenIdle: T.bool,
  onClick: T.func,
  disabled: T.bool,
}

ArrowButton.defaultProps = {
  children: '下一步',
  arrowStyle: 'default',
  size: SIZE.SMALL,
  direction: 'right',
  dimWhenIdle: false,
  onClick: log,
  disabled: false,
}

export default React.memo(ArrowButton)
