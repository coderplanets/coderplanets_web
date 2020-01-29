/*
 *
 * CoolNaviContent
 *
 */

import React from 'react'
import R from 'ramda'

import DotDivider from '@components/DotDivider'

import {
  Wrapper,
  DatesWrapper,
  DateItem,
  Head,
  Foot,
  WeekHint,
  WeekendHint,
  SelectorRow,
  YearWrapper,
  YearVal,
  YearUnit,
  MonthWrapper,
  MonthVal,
  MonthUnit,
} from './styles/date_selector'

let dates = []

const fillItems = () => {
  dates = []
  for (let idx = 0; idx < 31; idx += 1) {
    dates.push({
      id: idx,
      date: idx + 1,
    })
  }
}

const DateSelector = () => {
  fillItems()
  const items = dates

  const weekends = [5, 6, 18, 19, 27, 28]
  const activitiesDates = [3, 4, 19, 23, 24]

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

      <div>
        <DatesWrapper>
          {items.slice(0, 15).map(item => (
            <DateItem
              key={item.id}
              active={R.contains(item.id, activitiesDates)}
            >
              <Head>
                {item.date}
                {R.contains(item.id, weekends) && <WeekendHint>六</WeekendHint>}
                {R.contains(item.id, activitiesDates) &&
                  !R.contains(item.id, weekends) && <WeekHint>四</WeekHint>}
              </Head>
              {R.contains(item.id, activitiesDates) && (
                <Foot>
                  <DotDivider radius="2px" space="2px" />
                  <DotDivider radius="2px" space="2px" />
                  <DotDivider radius="2px" space="2px" />
                </Foot>
              )}
            </DateItem>
          ))}
        </DatesWrapper>
        <DatesWrapper>
          {items.slice(15, 31).map(item => (
            <DateItem
              key={item.id}
              active={R.contains(item.id, activitiesDates)}
            >
              <Head>
                {item.date}
                {R.contains(item.id, weekends) && <WeekendHint>六</WeekendHint>}
                {R.contains(item.id, activitiesDates) &&
                  !R.contains(item.id, weekends) && <WeekHint>四</WeekHint>}
              </Head>
              {R.contains(item.id, activitiesDates) && (
                <Foot>
                  <DotDivider radius="2px" space="2px" />
                  <DotDivider radius="2px" space="2px" />
                  <DotDivider radius="2px" space="2px" />
                </Foot>
              )}
            </DateItem>
          ))}
        </DatesWrapper>
      </div>
    </Wrapper>
  )
}

export default DateSelector
