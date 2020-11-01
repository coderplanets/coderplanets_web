/*
 *
 * AvatarFallback
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'

import { Wrapper, Name } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:AvatarFallback:index')

const AvatarFallback = ({
  testId,
  className,
  width,
  title,
  left,
  right,
  top,
  bottom,
}) => {
  return (
    <Wrapper
      className={className}
      testId={testId}
      width={width}
      left={left}
      right={right}
      top={top}
      bottom={bottom}
    >
      <Name width={width}>{title.slice(0, 1)}</Name>
    </Wrapper>
  )
}

AvatarFallback.propTypes = {
  testId: T.string,
  className: T.string,
  width: T.number,
  title: T.string,
  left: T.string,
  right: T.string,
  top: T.string,
  bottom: T.string,
}

AvatarFallback.defaultProps = {
  testId: 'avatar-fallback',
  className: '',
  width: 15,
  title: '?',
  left: '0',
  right: '0',
  top: '0',
  bottom: '0',
}

export default React.memo(AvatarFallback)
