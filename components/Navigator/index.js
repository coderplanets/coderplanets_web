/*
 *
 * Navigator
 *
 */

import React from 'react'
import T from 'prop-types'
import R from 'ramda'

import { ROUTE, C11N } from '@constant'
import { buildLog } from '@utils'

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
    return <DigestView curRoute={curRoute} />
  }

  return (
    <React.Fragment>
      {layout === C11N.DIGEST ? (
        <DigestView curRoute={curRoute} />
      ) : (
        <BriefView community={curCommunity} curRoute={curRoute} />
      )}
    </React.Fragment>
  )
}

Navigator.propTypes = {
  curCommunity: T.object,
  layout: T.oneOf([C11N.DIGEST, C11N.BRIEF]),
  curRoute: T.shape({
    mainPath: T.string,
    subPath: T.string,
  }).isRequired,
}

Navigator.defaultProps = {
  curCommunity: {},
  layout: C11N.DIGEST,
}

export default Navigator
