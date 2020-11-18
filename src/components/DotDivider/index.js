/*
 *
 * DotDivider
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'
import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:DotDivider:index')

const DotDivider = ({ radius, space, className }) => (
  <Wrapper radius={radius} space={space} className={className} />
)

DotDivider.propTypes = {
  // just for clean styled-component warnings
  className: T.string,
  radius: T.number,
  space: T.number,
}

DotDivider.defaultProps = {
  className: 'dot-divider-class',
  radius: 5,
  space: 5,
}

export default React.memo(DotDivider)
