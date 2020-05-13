/*
 *
 * AlertBar
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:AlertBar:index')

const AlertBar = ({ children }) => {
  return <Wrapper testid="alertBar">{children}</Wrapper>
}

AlertBar.propTypes = {
  children: T.oneOfType(T.string, T.node).isRequired,
}

AlertBar.defaultProps = {}

export default React.memo(AlertBar)
