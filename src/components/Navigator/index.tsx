/*
 *
 * Navigator
 *
 */

import { FC, memo, Fragment } from 'react'
import { contains, values } from 'ramda'

import type { TCommunity, TC11NLayout } from '@/spec'
import { C11N, METRIC } from '@/constant'
import { buildLog } from '@/utils'

import DigestView from './DigestView'
import BriefView from './BriefView'

/* eslint-disable-next-line */
const log = buildLog('c:Navigator:index')

type TProps = {
  community: TCommunity
  isOnline?: boolean
  layout: TC11NLayout
  metric?: string
}

const Navigator: FC<TProps> = ({
  community,
  layout,
  metric = METRIC.COMMUNITY,
  isOnline = true,
}) => {
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
    <Fragment>
      {layout === C11N.BRIEF ? (
        <BriefView community={community} />
      ) : (
        <DigestView
          showLogoText={showLogoText}
          isOnline={isOnline}
          metric={metric}
        />
      )}
    </Fragment>
  )
}

export default memo(Navigator)
