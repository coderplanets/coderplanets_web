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

const DotDivider = ({ radius, color, space }) => {
  return <Wrapper radius={radius} space={space} color={color} />
}

DotDivider.propTypes = {
  // https://www.npmjs.com/package/prop-types
  radius: PropTypes.string,
  color: PropTypes.any,
  space: PropTypes.string,
}

DotDivider.defaultProps = {
  radius: '5px',
  space: '5px',
  color: null,
}

export default DotDivider
