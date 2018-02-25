/*
 *
 * Contribution heat map, inspired by github
 * TODO: this component use global class as style
 *
 */

import React from 'react'
import CalendarHeatmap from 'react-calendar-heatmap'
import ReactTooltip from 'react-tooltip'

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

const customTooltipDataAttrs = value => ({
  'data-tip':
    value.date === null ? '' : `${value.date} 贡献内容 ${value.count} 次`,
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
const startDate = '2017-08-01'
const endDate = '2018-01-30'
const actives = [
  { date: '2017-08-04', count: 1 },
  { date: '2017-08-05', count: 1 },
  { date: '2017-08-11', count: 2 },
  { date: '2017-09-05', count: 3 },
  { date: '2017-09-12', count: 9 },
  { date: '2017-10-06', count: 8 },
  { date: '2017-11-20', count: 10 },
  { date: '2017-11-24', count: 10 },
  { date: '2018-01-01', count: 1 },
  { date: '2018-01-02', count: 1 },
  { date: '2018-01-03', count: 1 },
  { date: '2018-01-04', count: 1 },
  { date: '2018-01-20', count: 1 },
  { date: '2018-01-21', count: 17 },
]

// TODO
const getClass = value => {
  if (!value) {
    return 'color-empty'
  }
  switch (true) {
    case value.count >= 1 && value.count < 6:
      return 'color-scale-1'
    case value.count >= 7 && value.count < 16:
      return 'color-scale-2'
    case value.count >= 16 && value.count < 26:
      return 'color-scale-3'
    case value.count >= 26 && value.count < 36:
      return 'color-scale-4'
    default:
      return 'color-scale-5' // 5 is the largest
  }
}

const ContributeMap = () => (
  <Wrapper>
    <TitleWrapper>
      <Title>过去6个月共创作 123 次</Title>
      <HelpText>记录规则？</HelpText>
    </TitleWrapper>
    <CalendarHeatmap
      startDate={startDate}
      endDate={endDate}
      showMonthLabels
      onClick={value => {
        console.log(value)
      }}
      gutterSize={3}
      tooltipDataAttrs={customTooltipDataAttrs}
      monthLabels={monthLabels}
      values={actives}
      classForValue={getClass}
    />
    <ReactTooltip type="error" effect="float" place="top" />
    <DotWrapper>
      <DotList>
        <DotText>潜水&nbsp;&nbsp;</DotText>
        <ColorDot color="#E2EEED" />
        <ColorDot color="#DBE290" />
        <ColorDot color="#99C06F" />
        <ColorDot color="#609D4C" />
        <ColorDot color="#61793E" />
        <ColorDot color="#37642C" />
        <DotText>&nbsp;高产</DotText>
      </DotList>
    </DotWrapper>
  </Wrapper>
)

export default ContributeMap
