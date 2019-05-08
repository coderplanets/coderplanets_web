/*
 *
 * EmptyLabel
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '@config'

import { makeDebugger } from '@utils'
import { Wrapper, Icon, Title } from './styles'
/* eslint-disable-next-line */
const debug = makeDebugger('c:EmptyLabel:index')

const EmptyLabel = ({ text, iconSrc, size }) => (
  <Wrapper>
    <Icon src={iconSrc} size={size} />
    <Title size={size}>{text}</Title>
  </Wrapper>
)

EmptyLabel.propTypes = {
  iconSrc: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.oneOf(['default', 'large']),
}

EmptyLabel.defaultProps = {
  text: '啥子都没得 ...',
  iconSrc: `${ICON_CMD}/planet_v2.svg`,
  size: 'default',
}

export default EmptyLabel
