/*
 * Tabber
 */

import React from 'react'
import PropTypes from 'prop-types'

import { makeDebugger, THREAD, C11N, sortByIndex } from '@utils'
import NormalView from './NormalView'
import BriefView from './BriefView'

import { mapAlias } from './alias'

/* eslint-disable-next-line */
const debug = makeDebugger('c:Tabber:index')

const Tabber = ({ source, active, onChange, layout, communityRaw }) => {
  const aliasSource = mapAlias(source, communityRaw)
  const sortedSource = sortByIndex(aliasSource)

  return (
    <React.Fragment>
      {layout === C11N.DIGEST ? (
        <NormalView source={sortedSource} active={active} onChange={onChange} />
      ) : (
        <BriefView source={sortedSource} active={active} onChange={onChange} />
      )}
    </React.Fragment>
  )
}

Tabber.propTypes = {
  onChange: PropTypes.func,
  source: PropTypes.array.isRequired,
  active: PropTypes.string,
  layout: PropTypes.oneOf([C11N.DIGEST, C11N.BRIEF]),
  communityRaw: PropTypes.string,
}

Tabber.defaultProps = {
  active: THREAD.POST,
  onChange: debug,
  layout: C11N.DIGEST,
  communityRaw: 'home',
}

export default React.memo(Tabber)
