/*
 *
 * ImgFallback for avatar
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'

import { Wrapper, Name } from './styles/avatar'

/* eslint-disable-next-line */
const log = buildLog('c:ImgFallback:Avatar')

const Avatar = ({
  testId,
  className,
  size,
  user,
  left,
  right,
  top,
  bottom,
  quote,
}) => {
  const name = user?.nickname
  const sliceCount = size > 32 ? 2 : 1

  return (
    <Wrapper
      className={className}
      testId={testId}
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

Avatar.propTypes = {
  testId: T.string,
  className: T.string,
  user: T.shape({
    nickname: T.string,
  }),
  size: T.number,
  left: T.number,
  right: T.number,
  top: T.number,
  bottom: T.number,
  quote: T.bool,
}

Avatar.defaultProps = {
  testId: 'avatar-fallback',
  className: '',
  size: 15,
  user: {
    nickname: '?',
  },
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  quote: false,
}

export default React.memo(Avatar)
