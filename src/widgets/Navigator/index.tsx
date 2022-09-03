/*
 * Navigator
 */

import { FC, memo } from 'react'

import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'

import DigestView from './DigestView'
// import BriefView from './BriefView'

type TProps = {
  metric?: TMetric
}

const Navigator: FC<TProps> = ({ metric = METRIC.COMMUNITY }) => {
  const showLogoText = true // shouldShowLogoText(community.raw, metric, layout)

  return <DigestView showLogoText={showLogoText} metric={metric} />
}

export default memo(Navigator)
