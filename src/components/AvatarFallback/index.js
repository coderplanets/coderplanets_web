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

const AvatarFallback = ({ testId, width, title }) => {
  return (
    <Wrapper testId={testId} width={width}>
      <Name>{title.slice(0, 1)}</Name>
    </Wrapper>
  )
}

AvatarFallback.propTypes = {
  testId: T.string,
  width: T.string,
  title: T.string,
}

AvatarFallback.defaultProps = {
  testId: 'avatar-fallback',
  width: '15px',
  title: '?',
}

export default React.memo(AvatarFallback)
