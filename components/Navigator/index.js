/*
 *
 * Navigator
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { buildLog, C11N, ROUTE } from '@utils'
import DigestView from './DigestView'
import BriefView from './BriefView'

/* eslint-disable-next-line */
const log = buildLog('c:Navigator:index')

const Navigator = ({ curCommunity, layout, curRoute }) => {
  const { mainPath, subPath } = curRoute

  if (
    R.contains(mainPath, [ROUTE.USER, ROUTE.COMMUNITIES]) ||
    R.contains(subPath, [ROUTE.POST, ROUTE.JOB, ROUTE.VIDEO, ROUTE.REPO])
  ) {
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
  curRoute: PropTypes.shape({
    mainPath: PropTypes.string,
    subPath: PropTypes.string,
  }).isRequired,
}

Navigator.defaultProps = {
  curCommunity: {},
  layout: C11N.DIGEST,
}

export default Navigator
