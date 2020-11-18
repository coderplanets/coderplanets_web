import React from 'react'
import { sort, isEmpty } from 'ramda'

// import { ICON_CMD } from '../../config'
import DotDivider from '@/components/DotDivider'

import {
  Wrapper,
  SumWrapper,
  DetailText,
  DashboardListWrapper,
  DashItem,
  Divider,
  Title,
  Num,
  Chart,
  ChartBar,
} from './styles/num_dashboard'

import { ToggleNumBashboard } from './logic'

export const sortByValue = (source) => sort((a, b) => b.value - a.value, source)

const NumDashboard = ({ total, geoData, expand }) => {
  if (isEmpty(geoData)) return null

  const sortGeo = sortByValue(geoData) || []
  const maxValue = sortGeo[0].value || 0

  return (
    <Wrapper expand={expand}>
      <SumWrapper>
        总人数: {total} <DotDivider />{' '}
        <DetailText onClick={ToggleNumBashboard}>
          {expand ? '收起' : '详情'}
        </DetailText>
      </SumWrapper>
      {expand && (
        <DashboardListWrapper>
          {sortGeo.map((item, idx) => (
            <div key={item.value + item.city}>
              <DashItem>
                <Title active={idx <= 2}>{item.city}</Title>
                <DotDivider radius={3} space={3} />
                <Num>{item.value}人</Num>
                <Chart>
                  <ChartBar
                    width={`${Math.floor((item.value / maxValue) * 100)}%`}
                    active={idx <= 2}
                  />
                </Chart>
              </DashItem>
              <Divider show={idx === 2} />
            </div>
          ))}
        </DashboardListWrapper>
      )}
    </Wrapper>
  )
}

export default React.memo(NumDashboard)
