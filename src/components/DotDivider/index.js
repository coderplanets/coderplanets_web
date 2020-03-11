/*
 *
 * DotDivider
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'
import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:DotDivider:index')

const DotDivider = ({ radius, space, className }) => (
  <Wrapper radius={radius} space={space} className={className} />
)

DotDivider.propTypes = {
  radius: T.string,
  space: T.string,
  // just for clean styled-component warnings
  className: T.string,
}

DotDivider.defaultProps = {
  radius: '5px',
  space: '5px',
  className: 'dot-divider-class',
}

export default React.memo(DotDivider)
