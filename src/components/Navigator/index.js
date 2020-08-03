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

const Navigator = ({ curCommunity, layout }) => {
  const router = useRouter()
  const [mainPath, subPath] = getRoutePathList(router.asPath)

  if (
    contains(mainPath, [ROUTE.USER, ROUTE.DISCOVERY]) ||
    contains(subPath, [ROUTE.POST, ROUTE.JOB, ROUTE.VIDEO, ROUTE.REPO])
  ) {
    return <DigestView />
  }

  return (
    <>
      {layout === C11N.DIGEST ? (
        <DigestView />
      ) : (
        <BriefView community={curCommunity} />
      )}
    </>
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

export default React.memo(Navigator)
