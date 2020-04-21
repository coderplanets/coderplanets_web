/*
 *
 * IconText
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog, nilOrEmpty } from '@utils'

import { Wrapper, Icon, Text } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:IconText:index')

const IconText = ({ iconSrc, round, children, size, margin }) => (
  <Wrapper testid="iconText">
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
  size: T.oneOf(['tiny', 'small', 'medium', 'large']),
  margin: T.oneOfType([T.string, T.instanceOf(null)]),
}

IconText.defaultProps = {
  iconSrc: '',
  round: false,
  size: 'small',
  margin: null,
}

export default React.memo(IconText)
