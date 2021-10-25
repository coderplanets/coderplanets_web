import { FC, memo } from 'react'
import { sort, isEmpty } from 'ramda'

import CustomScroller from '@/widgets/CustomScroller'
// import { ICON_CMD } from '../../config'
import DotDivider from '@/widgets/DotDivider'

import {
  Wrapper,
  SumWrapper,
  DetailText,
  DashItem,
  Divider,
  Title,
  Num,
  Chart,
  ChartBar,
} from './styles/num_dashboard'

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

const NumDashboard: FC<TProps> = ({ total, geoData }) => {
  if (isEmpty(geoData)) return null

  const sortGeo = sortByValue(geoData) || []
  const maxValue = sortGeo[0].value || 0

  return (
    <Wrapper>
      {/* <SumWrapper>
        总人数: {total} <DotDivider />{' '}
      </SumWrapper> */}
      <CustomScroller
        direction="vertical"
        height="200px"
        showShadow={false}
        autoHide
      >
        {sortGeo.map((item, idx) => (
          <div key={item.value + item.city}>
            <DashItem>
              <Title active={idx <= 2}>{item.city}</Title>
              {/* <DotDivider radius={3} space={3} />
              <Num>{item.value}人</Num> */}
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
      </CustomScroller>
    </Wrapper>
  )
}

export default memo(NumDashboard)
