/*
 *
 * Navigator
 *
 */

import React from 'react'
import T from 'prop-types'
import { contains, values } from 'ramda'

import { C11N, METRIC } from '@/constant'
import { buildLog } from '@/utils'

import DigestView from './DigestView'
import BriefView from './BriefView'

/* eslint-disable-next-line */
const log = buildLog('c:Navigator:index')

const Navigator = ({ curCommunity, layout, metric, isOnline }) => {
  const showLogoText = !contains(metric, [
    METRIC.COMMUNITY,
    METRIC.ARTICLE,
    METRIC.ARTICLE_EDITOR,
  ])

  const onlyDigestView = contains(metric, [
    METRIC.ARTICLE,
    METRIC.ARTICLE_EDITOR,
    METRIC.USER,
    METRIC.DISCOVERY,
  ])

  if (onlyDigestView) {
    return (
      <DigestView
        showLogoText={showLogoText}
        isOnline={isOnline}
        metric={metric}
      />
    )
  }

  return (
    <React.Fragment>
      {layout === C11N.BRIEF ? (
        <BriefView community={curCommunity} />
      ) : (
        <DigestView
          showLogoText={showLogoText}
          isOnline={isOnline}
          metric={metric}
        />
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
