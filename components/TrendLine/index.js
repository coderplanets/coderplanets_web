/*
 *
 * TrendLine
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import Trend from 'react-trend'

import { withTheme } from 'styled-components'

import { makeDebugger, theme as themeHelper } from '../../utils'
/* eslint-disable-next-line */
const debug = makeDebugger('c:TrendLine:index')

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
  data: PropTypes.array,
  theme: PropTypes.object.isRequired,
  width: PropTypes.number,
  radius: PropTypes.number,
}

TrendLine.defaultProps = {
  data: [],
  radius: 15,
  width: 3,
}

export default withTheme(TrendLine)
