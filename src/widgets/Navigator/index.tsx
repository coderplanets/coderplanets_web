/*
 * Navigator
 */

import { FC, memo } from 'react'

import type { TCommunity, TMetric } from '@/spec'
import { METRIC } from '@/constant'

import DigestView from './DigestView'
// import BriefView from './BriefView'

type TProps = {
  community: TCommunity
  metric?: TMetric
}

const Navigator: FC<TProps> = ({ community, metric = METRIC.COMMUNITY }) => {
  const showLogoText = true // shouldShowLogoText(community.raw, metric, layout)

  return <DigestView showLogoText={showLogoText} metric={metric} />
}

export default memo(Navigator)
