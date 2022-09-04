/*
 *
 * TrendLine
 *
 */

import { FC, memo } from 'react'
import Trend from 'react-trend'
import { useTheme } from 'styled-components'

import type { TThemeMap } from '@/spec'
import { buildLog } from '@/utils/logger'

/* eslint-disable-next-line */
const log = buildLog('w:TrendLine:index')

type TProps = {
  data: number[]
  radius?: number
  width?: number
}

const TrendLine: FC<TProps> = ({ data, radius = 15, width = 5 }) => {
  const theme = useTheme() as TThemeMap

  const {
    heatmap: { activityLow, activityHight },
  } = theme

  return (
    <Trend
      smooth
      data={data}
      gradient={[activityLow, activityHight]}
      radius={radius}
      strokeWidth={width}
      strokeLinecap="round"
    />
  )
}

export default memo(TrendLine)
