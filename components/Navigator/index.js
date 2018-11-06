/*
 *
 * Navigator
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import DigestView from './DigestView'
import BriefView from './BriefView'

import { makeDebugger, C11N } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Navigator:index')
/* eslint-enable no-unused-vars */

const Navigator = ({ curCommunity, layout }) => (
  <React.Fragment>
    {layout === C11N.DIGEST ? (
      <DigestView />
    ) : (
      <BriefView curCommunity={curCommunity} />
    )}
  </React.Fragment>
)

Navigator.propTypes = {
  curCommunity: PropTypes.object,
  layout: PropTypes.oneOf([C11N.DIGEST, C11N.BRIEF]),
}

Navigator.defaultProps = {
  curCommunity: {},
  layout: C11N.DIGEST,
}

export default Navigator
