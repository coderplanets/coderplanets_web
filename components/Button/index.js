/*
 *
 * AntUi
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import MButton from './styles'

// import styled from 'styled-components'

import { makeDebugger } from '../../utils/functions'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Button:index')
/* eslint-enable no-unused-vars */

const Button = ({ children, size }) => {
  return <MButton size={size}>{children}</MButton>
}

MButton.propTypes = {
  children: PropTypes.string,
  size: PropTypes.oneOf(['default', 'large', 'small']),
}

MButton.defaultProps = {
  children: '..?..',
  size: 'default',
}

export default Button
