import React from 'react'
import shortid from 'shortid'
import R from 'ramda'

import { ICON_ASSETS } from '../../config'

import {
  BannerContainer,
  BannerContentWrapper,
  MonthWrapper,
  MonthNumber,
  UpIcon,
  DownIcon,
  DaysWrapper,
  DayBlock,
  DayWeek,
  DayNumber,
} from './styles/activities_root_banner'

const MonthSelector = () => (
  <MonthWrapper>
    <UpIcon path={`${ICON_ASSETS}/cmd/up.svg`} />
    <MonthNumber>7月</MonthNumber>
    <DownIcon path={`${ICON_ASSETS}/cmd/up.svg`} />
  </MonthWrapper>
)

const days = R.range(1, 32)

const DaysSelector = () => (
  <DaysWrapper>
    {days.map(day => (
      <DayBlock key={shortid.generate()} day={day}>
        <DayWeek day={day}>周几</DayWeek>
        <DayNumber>{day}</DayNumber>
      </DayBlock>
    ))}
  </DaysWrapper>
)

const ActivitiesRootBanner = () => (
  <BannerContainer>
    <BannerContentWrapper>
      <MonthSelector />
      <DaysSelector />
    </BannerContentWrapper>
  </BannerContainer>
)

export default ActivitiesRootBanner
