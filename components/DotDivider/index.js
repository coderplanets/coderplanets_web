/*
 *
 * DotDivider
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './styles'

import { makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:DotDivider:index')
/* eslint-enable no-unused-vars */

const DotDivider = ({ radius, space }) => (
  <Wrapper radius={radius} space={space} />
)

DotDivider.propTypes = {
  radius: PropTypes.string,
  space: PropTypes.string,
}

DotDivider.defaultProps = {
  radius: '5px',
  space: '5px',
}

export default DotDivider
