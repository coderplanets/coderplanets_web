/*
 *
 * BodyLayout
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { makeDebugger } from '../../utils/functions'
import { theme } from '../../utils/themes'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:BodyLayout:index')
/* eslint-enable no-unused-vars */

export const Body = styled.div`
  padding-left: 56px;
  position: relative;
  height: 100vh;
  background: ${theme('body_bg')};
  transition: background-color 0.3s;
  display: flex;
  flex-direction: column;
`

const BodyLayout = ({ children }) => {
  return <Body>{children}</Body>
}

BodyLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}

BodyLayout.defaultProps = {
  children: <div />,
}

export default BodyLayout
