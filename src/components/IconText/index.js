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

const IconText = ({ iconSrc, round, children, size }) => (
  <Wrapper testid="iconText">
    {!nilOrEmpty(iconSrc) && <Icon src={iconSrc} size={size} round={round} />}
    <Text size={size}>{children}</Text>
  </Wrapper>
)

IconText.propTypes = {
  iconSrc: T.string,
  round: T.bool,
  children: T.oneOfType([T.node, T.string]).isRequired,
  size: T.oneOf(['tiny', 'small', 'medium', 'large']),
}

IconText.defaultProps = {
  iconSrc: '',
  round: false,
  size: 'small',
}

export default React.memo(IconText)
