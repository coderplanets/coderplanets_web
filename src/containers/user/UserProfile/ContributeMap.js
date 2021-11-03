/*
 *
 * Contribution heat map, inspired by github
 * TODO: this component use global class as style
 *
 */
import React from 'react'
import CalendarHeatmap from 'react-calendar-heatmap'
import ReactTooltip from 'react-tooltip'

import { buildLog } from '@/utils/logger'
import {
  Wrapper,
  Title,
  Header,
  Divider,
  DotText,
  ColorDot,
  DotList,
} from './styles/contribute_map'

const log = buildLog('C:Comments')

const customTooltipDataAttrs = (value) => ({
  'data-tip': value.date === null ? '' : `${value.count} 次 (${value.date})`,
  'data-for': 'user_contribute_map',
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

const getClass = (value) => {
  if (!value) return 'color-empty'

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

const UserContributeMap = ({ data }) => {
  return (
    <Wrapper className="banner-heatmap">
      <Header>
        <Title>过去 1 年共创作 {data.totalCount} 次内容</Title>
        <DotList>
          <DotText>潜水&nbsp;&nbsp;</DotText>
          <ColorDot scale="empty" />
          <ColorDot scale="1" />
          <ColorDot scale="2" />
          <ColorDot scale="3" />
          <ColorDot scale="4" />
          <ColorDot scale="5" />
          <DotText>&nbsp;活跃</DotText>
        </DotList>
      </Header>
      <Divider />
      <CalendarHeatmap
        // startDate={data.startDate}
        startDate="2020-01-01"
        // endDate={data.endDate}
        endDate="2020-12-30"
        showMonthLabels
        onClick={(value) => log(value)}
        gutterSize={4}
        tooltipDataAttrs={customTooltipDataAttrs}
        monthLabels={monthLabels}
        values={data.records}
        classForValue={getClass}
      />
      <ReactTooltip
        type="error"
        effect="solid"
        place="top"
        id="user_contribute_map"
      />
    </Wrapper>
  )
}

export default React.memo(UserContributeMap)
