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

const IconText = ({ iconSrc, children, size }) => (
  <Wrapper testid="iconText">
    {!nilOrEmpty(iconSrc) && <Icon src={iconSrc} size={size} />}
    <Text size={size}>{children}</Text>
  </Wrapper>
)

IconText.propTypes = {
  iconSrc: T.string,
  children: T.oneOfType([T.node, T.string]).isRequired,
  size: T.oneOf(['small', 'medium', 'large']),
}

IconText.defaultProps = {
  iconSrc: '',
  size: 'small',
}

export default React.memo(IconText)
