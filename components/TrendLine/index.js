/*
 *
 * TrendLine
 *
 */

import React from 'react'
import T from 'prop-types'
import Trend from 'react-trend'

import { withTheme } from 'styled-components'

import { buildLog, theme as themeHelper } from '@utils'
/* eslint-disable-next-line */
const log = buildLog('c:TrendLine:index')

const TrendLine = ({ data, radius, width, theme }) => {
  const activityLowColor = themeHelper('heatmap.activityLow')({ theme })
  const activityHightColor = themeHelper('heatmap.activityHight')({ theme })

  return (
    <Trend
      smooth
      data={data}
      gradient={[activityLowColor, activityHightColor]}
      radius={radius}
      strokeWidth={width}
      strokeLinecap="round"
    />
  )
}

TrendLine.propTypes = {
  // https://www.npmjs.com/package/prop-types
  data: T.array,
  theme: T.object.isRequired,
  width: T.number,
  radius: T.number,
}

TrendLine.defaultProps = {
  data: [],
  radius: 15,
  width: 3,
}

export default withTheme(TrendLine)
