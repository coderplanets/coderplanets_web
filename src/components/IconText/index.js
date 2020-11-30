/*
 *
 * IconText
 *
 */

import React from 'react'
import T from 'prop-types'
import { values } from 'ramda'

import { buildLog, nilOrEmpty } from '@/utils'
import { SIZE } from '@/constant'

import { Wrapper, Icon, Text } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:IconText:index')

const IconText = ({ iconSrc, round, children, size, margin }) => (
  <Wrapper testId="iconText">
    {!nilOrEmpty(iconSrc) && (
      <Icon src={iconSrc} size={size} round={round} margin={margin} />
    )}
    <Text size={size}>{children}</Text>
  </Wrapper>
)

IconText.propTypes = {
  iconSrc: T.string,
  round: T.bool,
  children: T.oneOfType([T.node, T.string]).isRequired,
  size: T.oneOf(values(SIZE)),
  margin: T.oneOfType([T.string, T.instanceOf(null)]),
}

IconText.defaultProps = {
  iconSrc: '',
  round: false,
  size: SIZE.SMALL,
  margin: null,
}

export default React.memo(IconText)
