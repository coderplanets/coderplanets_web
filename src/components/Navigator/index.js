/*
 *
 * Navigator
 *
 */

import React from 'react'
import T from 'prop-types'
import { useRouter } from 'next/router'
import { contains, values } from 'ramda'

import { ROUTE, C11N, METRIC } from '@/constant'
import { buildLog, getRoutePathList } from '@/utils'

import DigestView from './DigestView'
import BriefView from './BriefView'

/* eslint-disable-next-line */
const log = buildLog('c:Navigator:index')

const Navigator = ({ curCommunity, layout, metric, isOnline }) => {
  const router = useRouter()
  const [mainPath, subPath] = getRoutePathList(router.asPath)
  const showLogoText = !contains(metric, [METRIC.COMMUNITY, METRIC.ARTICLE])

  if (
    contains(mainPath, [ROUTE.USER, ROUTE.DISCOVERY]) ||
    contains(subPath, [ROUTE.POST, ROUTE.JOB, ROUTE.VIDEO, ROUTE.REPO])
  ) {
    return <DigestView showLogoText={showLogoText} isOnline={isOnline} />
  }

  return (
    <React.Fragment>
      {layout === C11N.BRIEF ? (
        <BriefView community={curCommunity} />
      ) : (
        <DigestView showLogoText={showLogoText} isOnline={isOnline} />
      )}
    </React.Fragment>
  )
}

Navigator.propTypes = {
  curCommunity: T.object,
  layout: T.oneOf([C11N.DIGEST, C11N.DIGEST_ROW, C11N.BRIEF]),
  isOnline: T.bool,
  metric: T.oneOf(values(METRIC)),
}

Navigator.defaultProps = {
  curCommunity: {},
  layout: C11N.DIGEST,
  isOnline: true,
  metric: METRIC.COMMUNITY,
}

export default React.memo(Navigator)
