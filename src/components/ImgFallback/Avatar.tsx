/*
 *
 * ImgFallback for avatar
 *
 */

import React from 'react'

import { buildLog } from '@/utils'

import type { TAvatarProps as TProps } from './index'
import { Wrapper, Name } from './styles/avatar'

/* eslint-disable-next-line */
const log = buildLog('c:ImgFallback:Avatar')

const Avatar: React.FC<TProps> = ({
  testid = 'avatar-fallback',
  className = '',
  size = 15,
  user = {
    nickname: '?',
  },
  left = 0,
  right = 0,
  top = 0,
  bottom = 0,
  quote = false,
}) => {
  const name = user?.nickname
  const sliceCount = size > 32 ? 2 : 1

  return (
    <Wrapper
      className={className}
      testid={testid}
      size={size}
      left={left}
      right={right}
      top={top}
      bottom={bottom}
      quote={quote}
    >
      <Name size={size}>{name.slice(0, sliceCount)}</Name>
    </Wrapper>
  )
}

export default React.memo(Avatar)
