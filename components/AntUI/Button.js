/*
 *
 * AntUi
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'antd'

// import styled from 'styled-components'

import { makeDebugger } from '../../utils/functions'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:MButton:index')
/* eslint-enable no-unused-vars */

const MButton = ({ children }) => {
  return <Button>{children}</Button>
}

MButton.propTypes = {
  children: PropTypes.string,
}

MButton.defaultProps = {
  children: '..?..',
}

export default MButton
