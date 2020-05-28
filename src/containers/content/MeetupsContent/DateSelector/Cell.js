import React from 'react'
import { contains } from 'ramda'

import DotDivider from '@/components/DotDivider'

import {
  Wrapper,
  Head,
  DateText,
  Foot,
  WeekHint,
  WeekendHint,
} from '../styles/date_selector/cell'

const weekends = [5, 6, 18, 19, 27, 28]
const activitiesDates = [3, 4, 19, 23, 24]

const Cell = ({ item, isLeapMonth }) => {
  return (
    <Wrapper
      key={item.id}
      active={contains(item.id, activitiesDates)}
      isLeapMonth={isLeapMonth}
    >
      <Head>
        <DateText active={item.id === 9}>{item.date}</DateText>
        {contains(item.id, weekends) && <WeekendHint>六</WeekendHint>}
        {contains(item.id, activitiesDates) && !contains(item.id, weekends) && (
          <WeekHint>四</WeekHint>
        )}
      </Head>
      {contains(item.id, activitiesDates) && (
        <Foot>
          <DotDivider radius="2px" space="2px" />
          <DotDivider radius="2px" space="2px" />
          <DotDivider radius="2px" space="2px" />
        </Foot>
      )}
    </Wrapper>
  )
}

export default Cell
