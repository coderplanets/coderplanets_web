/*
 *
 * BlinkCursor
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:BlinkCursor:index')

type TProps = {
  testid?: string
  height?: number
  top?: number
  left?: number
  right?: number
  duration?: number
}

const BlinkCursor: FC<TProps> = ({
  testid = 'blink-cursor',
  height = 12,
  top = 2,
  left = 10,
  right = 10,
  duration = 2,
}) => {
  return (
    <Wrapper
      testid={testid}
      height={height}
      top={top}
      left={left}
      right={right}
      duration={duration}
    />
  )
}

export default memo(BlinkCursor)
