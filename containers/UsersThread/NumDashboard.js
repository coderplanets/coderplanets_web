import React from 'react'
import R from 'ramda'

// import { ICON_CMD } from '../../config'
import { uid } from '@utils'
import DotDivider from '@components/DotDivider'

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

export const sortByValue = source => R.sort((a, b) => b.value - a.value, source)

const NumDashboard = ({ total, geoData, expand }) => {
  if (R.isEmpty(geoData)) return null

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
            <div key={uid.gen()}>
              <DashItem>
                <Title active={idx <= 2}>{item.city}</Title>
                <DotDivider radius="3px" space="3px" />
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

export default NumDashboard
