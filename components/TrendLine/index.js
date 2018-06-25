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
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:TrendLine:index')
/* eslint-enable no-unused-vars */

const TrendLine = ({ data, duration, radius, width, theme }) => {
  const activityLowColor = themeHelper('heatmap.activityLow')({ theme })
  const activityHightColor = themeHelper('heatmap.activityHight')({ theme })

  return (
    <Trend
      smooth
      autoDraw
      autoDrawDuration={duration}
      autoDrawEasing="ease-in"
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
  duration: PropTypes.number,
  width: PropTypes.number,
  radius: PropTypes.number,
}

TrendLine.defaultProps = {
  data: [],
  duration: 200,
  radius: 15,
  width: 3,
}

export default withTheme(TrendLine)
