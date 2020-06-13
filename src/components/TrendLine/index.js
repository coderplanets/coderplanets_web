/*
 *
 * TrendLine
 *
 */

import React from 'react'
import T from 'prop-types'
import Trend from 'react-trend'
import { useTheme } from 'styled-components'

import { buildLog } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('c:TrendLine:index')

const TrendLine = ({ data, radius, width }) => {
  const theme = useTheme()
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

TrendLine.propTypes = {
  // https://www.npmjs.com/package/prop-types
  data: T.array,
  width: T.number,
  radius: T.number,
}

TrendLine.defaultProps = {
  data: [],
  radius: 15,
  width: 3,
}

export default TrendLine
