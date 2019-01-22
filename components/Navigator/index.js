/*
 *
 * Navigator
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { makeDebugger, C11N, ROUTE } from 'utils'
import DigestView from './DigestView'
import BriefView from './BriefView'

/* eslint-disable-next-line */
const debug = makeDebugger('c:Navigator:index')

const Navigator = ({ curCommunity, layout, subPath }) => {
  if (R.contains(subPath, [ROUTE.POST, ROUTE.JOB, ROUTE.VIDEO, ROUTE.REPO])) {
    return <DigestView />
  }

  return (
    <React.Fragment>
      {layout === C11N.DIGEST ? (
        <DigestView />
      ) : (
        <BriefView community={curCommunity} />
      )}
    </React.Fragment>
  )
}

Navigator.propTypes = {
  curCommunity: PropTypes.object,
  layout: PropTypes.oneOf([C11N.DIGEST, C11N.BRIEF]),
  subPath: PropTypes.string.isRequired,
}

Navigator.defaultProps = {
  curCommunity: {},
  layout: C11N.DIGEST,
}

export default Navigator
