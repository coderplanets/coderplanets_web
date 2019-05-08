import React from 'react'
import R from 'ramda'

import { ICON_CMD } from '@config'

import { uid } from '@utils'
import {
  BannerContainer,
  BannerContentWrapper,
  MonthWrapper,
  MonthNumber,
  UpIcon,
  DaysWrapper,
  DayBlock,
  DayWeek,
  DayNumber,
} from './styles/activities_root_banner'

const MonthSelector = () => (
  <MonthWrapper>
    <UpIcon src={`${ICON_CMD}/up.svg`} />
    <MonthNumber>7月</MonthNumber>
    <UpIcon src={`${ICON_CMD}/up.svg`} reverse />
  </MonthWrapper>
)

const days = R.range(1, 32)

const DaysSelector = () => (
  <DaysWrapper>
    {days.map(day => (
      <DayBlock key={uid.gen()} day={day}>
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
