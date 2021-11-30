import { FC, memo } from 'react'
import { sort, isEmpty } from 'ramda'

import CustomScroller from '@/widgets/CustomScroller'

import {
  Wrapper,
  DashItem,
  Divider,
  Title,
  Chart,
  ChartBar,
  TotalWrapper,
  TotalNum,
} from './styles/raning_board'

type TMarker = {
  city: string
  value: number
  long: number
  lant: number
}

export const sortByValue = (source: TMarker[]): TMarker[] =>
  sort((a, b) => b.value - a.value, source)

type TProps = {
  total: number
  geoData: TMarker[]
}

const RankingBoard: FC<TProps> = ({ total, geoData }) => {
  if (isEmpty(geoData)) return null

  const sortGeo = sortByValue(geoData) || []
  const maxValue = sortGeo[0].value || 0
  const topList = sortGeo.slice(0, 3)
  const restList = sortGeo.slice(3)

  return (
    <Wrapper>
      {topList.map((item) => (
        <div key={item.value + item.city}>
          <DashItem>
            <Title active>{item.city}</Title>
            <Chart>
              <ChartBar
                width={`${Math.floor((item.value / maxValue) * 100)}%`}
                active
              />
            </Chart>
          </DashItem>
        </div>
      ))}
      <Divider />

      <CustomScroller
        direction="vertical"
        height="180px"
        showShadow={false}
        autoHide={false}
      >
        {restList.map((item) => (
          <div key={item.value + item.city}>
            <DashItem>
              <Title>{item.city}</Title>
              <Chart>
                <ChartBar
                  width={`${Math.floor((item.value / maxValue) * 100)}%`}
                />
              </Chart>
            </DashItem>
          </div>
        ))}
      </CustomScroller>
      <Divider />
      <TotalWrapper>
        总数: <TotalNum>{total}</TotalNum>
      </TotalWrapper>
    </Wrapper>
  )
}

export default memo(RankingBoard)
