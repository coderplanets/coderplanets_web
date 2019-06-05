/*
 *
 * DotDivider
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { makelogger } from '@utils'
import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = makelogger('c:DotDivider:index')

const DotDivider = ({ radius, space, className }) => (
  <Wrapper radius={radius} space={space} className={className} />
)

DotDivider.propTypes = {
  radius: PropTypes.string,
  space: PropTypes.string,
  // just for clean styled-component warnings
  className: PropTypes.string,
}

DotDivider.defaultProps = {
  radius: '5px',
  space: '5px',
  className: 'dot-divider-class',
}

export default DotDivider
