/*
 *
 * EmptyLabel
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'

import { buildLog } from '@utils'
import { Wrapper, Icon, Title } from './styles'
/* eslint-disable-next-line */
const log = buildLog('c:EmptyLabel:index')

const EmptyLabel = ({ text, iconSrc, size }) => (
  <Wrapper>
    <Icon src={iconSrc} size={size} />
    <Title size={size}>{text}</Title>
  </Wrapper>
)

EmptyLabel.propTypes = {
  iconSrc: T.string,
  text: T.string,
  size: T.oneOf(['default', 'large']),
}

EmptyLabel.defaultProps = {
  text: '啥子都没得 ...',
  iconSrc: `${ICON_CMD}/planet_v2.svg`,
  size: 'default',
}

export default EmptyLabel
