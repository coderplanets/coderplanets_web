/*
 *
 * EmptyLabel
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '../../config'

import { Wrapper, Icon, Title } from './styles'
import { makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:EmptyLabel:index')
/* eslint-enable no-unused-vars */

const EmptyLabel = ({ text, iconSrc }) => (
  <Wrapper>
    <Icon src={iconSrc} />
    <Title>{text}</Title>
  </Wrapper>
)

EmptyLabel.propTypes = {
  iconSrc: PropTypes.string,
  text: PropTypes.string,
}

EmptyLabel.defaultProps = {
  text: '啥子都没得 ...',
  iconSrc: `${ICON_CMD}/planet_v2.svg`,
}

export default EmptyLabel
