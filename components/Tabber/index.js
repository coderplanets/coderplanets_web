/*
 * Tabber
 */

import React from 'react'
import PropTypes from 'prop-types'

import NormalView from './NormalView'
import BriefView from './BriefView'

import { mapAlias } from './alias'

import { makeDebugger, THREAD } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Tabber:index')
/* eslint-enable no-unused-vars */

const Tabber = ({ source, active, onChange, layout, communityRaw }) => {
  const aliasSource = mapAlias(source, communityRaw)

  return (
    <React.Fragment>
      {layout === 'DIGEST' ? (
        <NormalView source={aliasSource} active={active} onChange={onChange} />
      ) : (
        <BriefView source={aliasSource} active={active} onChange={onChange} />
      )}
    </React.Fragment>
  )
}

Tabber.propTypes = {
  onChange: PropTypes.func,
  source: PropTypes.array.isRequired,
  active: PropTypes.string,
  layout: PropTypes.oneOf(['DIGEST', 'BRIEF']),
  communityRaw: PropTypes.string,
}

Tabber.defaultProps = {
  active: THREAD.POST,
  onChange: debug,
  layout: 'DIGEST',
  communityRaw: 'home',
}

export default React.memo(Tabber)
