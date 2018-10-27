/*
 *
 * Navigator
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import DigestView from './DigestView'
import SimpleView from './SimpleView'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Navigator:index')
/* eslint-enable no-unused-vars */

const Navigator = ({ curCommunity, layout }) => (
  <React.Fragment>
    {layout === 'DIGEST' ? (
      <DigestView />
    ) : (
      <SimpleView curCommunity={curCommunity} />
    )}
  </React.Fragment>
)

Navigator.propTypes = {
  curCommunity: PropTypes.object,
  layout: PropTypes.oneOf(['DIGEST', 'BRIEF']),
}

Navigator.defaultProps = {
  curCommunity: {},
  layout: 'DIGEST',
}

export default Navigator
