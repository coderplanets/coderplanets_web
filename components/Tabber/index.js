/*
 * Tabber
 */

import React from 'react'
import PropTypes from 'prop-types'

import NormalView from './NormalView'
import SimpleView from './SimpleView'

import { makeDebugger, THREAD } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Tabber:index')
/* eslint-enable no-unused-vars */

const Tabber = ({ source, active, onChange, layout }) => (
  <React.Fragment>
    {layout === 'DIGEST' ? (
      <NormalView source={source} active={active} onChange={onChange} />
    ) : (
      <SimpleView source={source} active={active} onChange={onChange} />
    )}
  </React.Fragment>
)

Tabber.propTypes = {
  onChange: PropTypes.func,
  source: PropTypes.array.isRequired,
  active: PropTypes.string,
  layout: PropTypes.oneOf(['DIGEST', 'BRIEF']),
}

Tabber.defaultProps = {
  active: THREAD.POST,
  onChange: debug,
  layout: 'DIGEST',
}

export default React.memo(Tabber)
