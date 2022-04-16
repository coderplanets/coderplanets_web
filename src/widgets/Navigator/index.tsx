/*
 * Navigator
 */

import { FC, memo } from 'react'
import { contains } from 'ramda'

import type { TCommunity, TC11NLayout, TMetric } from '@/spec'
import { C11N, METRIC, HCN } from '@/constant'

import DigestView from './DigestView'
// import BriefView from './BriefView'

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
  layout: TC11NLayout
  metric?: TMetric
}

const Navigator: FC<TProps> = ({
  community,
  layout,
  metric = METRIC.COMMUNITY,
}) => {
  const showLogoText = true // shouldShowLogoText(community.raw, metric, layout)

  return (
    <DigestView layout={layout} showLogoText={showLogoText} metric={metric} />
  )
}

export default memo(Navigator)
