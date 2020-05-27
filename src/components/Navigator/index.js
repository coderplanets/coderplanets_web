/*
 *
 * Navigator
 *
 */

import React from 'react'
import T from 'prop-types'
import R from 'ramda'
import { withRouter } from 'next/router'

import { ROUTE, C11N } from '@/constant'
import { buildLog, getRoutePathList } from '@/utils'

import DigestView from './DigestView'
import BriefView from './BriefView'

/* eslint-disable-next-line */
const log = buildLog('c:Navigator:index')

const Navigator = ({ curCommunity, layout, router }) => {
  const [mainPath, subPath] = getRoutePathList(router.asPath)

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
  curCommunity: T.object,
  layout: T.oneOf([C11N.DIGEST, C11N.BRIEF]),
}

Navigator.defaultProps = {
  curCommunity: {},
  layout: C11N.DIGEST,
}

export default React.memo(withRouter(Navigator))
