/*
 *
 * CoolGuideContent
 *
 */

import React from 'react'

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

const CalendarCard = () => {
  return (
    <Wrapper>
      <SelectorRow>
        <YearWrapper>
          <YearVal>2020</YearVal>
          <YearUnit>年</YearUnit>
        </YearWrapper>
        <MonthWrapper>
          <MonthVal>09</MonthVal>
          <MonthUnit>月</MonthUnit>
        </MonthWrapper>
      </SelectorRow>
    </Wrapper>
  )
}

export default React.memo(CalendarCard)
