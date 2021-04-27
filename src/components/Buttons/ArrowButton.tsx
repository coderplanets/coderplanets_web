/*
 *
 * ArrowButtons
 *
 */

import React, { FC, useRef, useState, useEffect } from 'react'

import type { TSIZE } from '@/spec'
import { ICON } from '@/config'
import { SIZE } from '@/constant'
import { buildLog } from '@/utils'

import { Wrapper, Text, LeftIcon, RightIcon } from './styles/arrow_button'

/* eslint-disable-next-line */
const log = buildLog('c:Buttons:ArrowButton')

type TProps = {
  children?: React.ReactNode
  onClick?: () => void
  size?: TSIZE
  direction?: 'left' | 'right'
  dimWhenIdle?: boolean
  disabled?: boolean
  arrowStyle?: 'default' | 'simple'
}

const ArrowButton: FC<TProps> = ({
  children = '下一步',
  onClick = log,
  size = SIZE.SMALL,
  direction = 'right',
  dimWhenIdle = false,
  arrowStyle = 'default',
  disabled = false,
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

export default React.memo(ArrowButton)
