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
  DateText,
  Foot,
  WeekHint,
  WeekendHint,
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
  const sunday = [6, 19, 28]
  const activitiesDates = [3, 4, 19, 23, 24]

  // TODO:  每逢周日隔开，就是一周一隔的
  return (
    <Wrapper>
      <DatesWrapper>
        {items.map(item => (
          <DateItem
            key={item.id}
            active={R.contains(item.id, activitiesDates)}
            margin={R.contains(item.id, sunday)}
          >
            <Head>
              <DateText active={item.id === 9}>{item.date}</DateText>
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
    </Wrapper>
  )
}

export default React.memo(DateSelector)
