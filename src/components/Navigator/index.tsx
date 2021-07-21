/*
 * Navigator
 */

import { FC, memo } from 'react'
import { contains } from 'ramda'

import type { TCommunity, TC11NLayout, TMetric } from '@/spec'
import { C11N, METRIC, HCN } from '@/constant'
import { buildLog } from '@/utils'

import DigestView from './DigestView'
// import BriefView from './BriefView'

/* eslint-disable-next-line */
const log = buildLog('c:Navigator:index')

const shouldShowLogoText = (
  communityRaw: string,
  metric: TMetric,
  layout: TC11NLayout,
): boolean => {
  if (contains(metric, [METRIC.ARTICLE, METRIC.ARTICLE_EDITOR])) return false
  if (communityRaw === HCN && layout === C11N.CLASSIC) return false

  return true
}

type TProps = {
  community: TCommunity
  isOnline?: boolean
  layout: TC11NLayout
  metric?: TMetric
}

const Navigator: FC<TProps> = ({
  community,
  layout,
  metric = METRIC.COMMUNITY,
  isOnline = true,
}) => {
  const showLogoText = shouldShowLogoText(community.raw, metric, layout)

  return (
    <DigestView
      layout={layout}
      showLogoText={showLogoText}
      isOnline={isOnline}
      metric={metric}
    />
  )
}

export default memo(Navigator)
