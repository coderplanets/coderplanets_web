/*
 *
 * Contribution heat map, inspired by github
 * TODO: this component use global class as style
 *
 */

import React from 'react'
import CalendarHeatmap from 'react-calendar-heatmap'
import ReactTooltip from 'react-tooltip'
import R from 'ramda'

import {
  Wrapper,
  TitleWrapper,
  Title,
  HelpText,
  DotWrapper,
  DotText,
  ColorDot,
  DotList,
} from './styles/contribute_map'

import { makeDebugger } from '../../utils'

const debug = makeDebugger('C:Comments')

const customTooltipDataAttrs = value => ({
  'data-tip': value.date === null ? '' : `${value.count} 次 (${value.date})`,
  'data-for': 'user_comtribute_map',
  'data-offset': JSON.stringify({ right: 7 }),
})

// const monthLabels = ['8月', '9月', '10月', '11月', '12月', '1月']
const monthLabels = [
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月',
]
/*
   const startDate = '2017-10-21'
   const endDate = '2018-04-21'
   const records = [
   { date: '2018-01-03', count: 1 },
   { date: '2018-01-04', count: 1 },
   { date: '2018-01-20', count: 1 },
   { date: '2018-01-21', count: 17 },
   ]
 */

// TODO
const getClass = value => {
  if (!value) {
    return 'color-empty'
  }
  switch (true) {
    case value.count >= 1 && value.count < 6:
      return 'color-scale-1'
    case value.count >= 6 && value.count < 16:
      return 'color-scale-2'
    case value.count >= 16 && value.count < 26:
      return 'color-scale-3'
    case value.count >= 26 && value.count < 36:
      return 'color-scale-4'
    default:
      return 'color-scale-5' // 5 is the largest
  }
}

const ContributeMap = ({ data }) => {
  /* if don't jadge empty(first load), the tool tip will not work */
  if (R.isEmpty(data.records)) {
    return <div />
  }
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>6个月内贡献 {data.totalCount} 次内容</Title>
        <HelpText>记录规则？</HelpText>
      </TitleWrapper>
      <CalendarHeatmap
        startDate={data.startDate}
        endDate={data.endDate}
        showMonthLabels
        onClick={value => {
          debug(value)
        }}
        gutterSize={3}
        tooltipDataAttrs={customTooltipDataAttrs}
        monthLabels={monthLabels}
        values={data.records}
        classForValue={getClass}
      />
      <ReactTooltip
        type="error"
        effect="solid"
        place="top"
        id="user_comtribute_map"
      />
      <DotWrapper>
        <DotList>
          <DotText>潜水&nbsp;&nbsp;</DotText>
          <ColorDot scale="empty" />
          <ColorDot scale="1" />
          <ColorDot scale="2" />
          <ColorDot scale="3" />
          <ColorDot scale="4" />
          <ColorDot scale="5" />
          <DotText>&nbsp;高产</DotText>
        </DotList>
      </DotWrapper>
    </Wrapper>
  )
}
export default ContributeMap
