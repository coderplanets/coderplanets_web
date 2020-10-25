/*
 *
 * Navigator
 *
 */

import React from 'react'
import T from 'prop-types'
import { contains } from 'ramda'
import { useRouter } from 'next/router'

import { ROUTE, C11N } from '@/constant'
import { buildLog, getRoutePathList } from '@/utils'

import DigestView from './DigestView'
import BriefView from './BriefView'

/* eslint-disable-next-line */
const log = buildLog('c:Navigator:index')

const Navigator = ({ curCommunity, layout, showLogoText }) => {
  const router = useRouter()
  const [mainPath, subPath] = getRoutePathList(router.asPath)

  if (
    contains(mainPath, [ROUTE.USER, ROUTE.DISCOVERY]) ||
    contains(subPath, [ROUTE.POST, ROUTE.JOB, ROUTE.VIDEO, ROUTE.REPO])
  ) {
    return <DigestView showLogoText={showLogoText} />
  }

  return (
    <React.Fragment>
      {layout === C11N.BRIEF ? (
        <BriefView community={curCommunity} />
      ) : (
        <DigestView showLogoText={showLogoText} />
      )}
    </React.Fragment>
  )
}

Navigator.propTypes = {
  curCommunity: T.object,
  layout: T.oneOf([C11N.DIGEST, C11N.DIGEST_ROW, C11N.BRIEF]),
  showLogoText: T.bool,
}

Navigator.defaultProps = {
  curCommunity: {},
  layout: C11N.DIGEST,
  showLogoText: false,
}

export default React.memo(Navigator)
