/*
 * CoolGuideContent
 */

import { FC, memo } from 'react'

import {
  Wrapper,
  SelectorRow,
  YearWrapper,
  YearVal,
  YearUnit,
  MonthWrapper,
  MonthVal,
  MonthUnit,
} from '../styles/date_selector/calendar_card'

const CalendarCard: FC = () => {
  return (
    <Wrapper>
      <SelectorRow>
        <YearWrapper>
          <YearVal>2020</YearVal>
          <YearUnit>年</YearUnit>
        </YearWrapper>
        <MonthWrapper>
          <MonthVal>12</MonthVal>
          <MonthUnit>月</MonthUnit>
        </MonthWrapper>
      </SelectorRow>
    </Wrapper>
  )
}

export default memo(CalendarCard)
