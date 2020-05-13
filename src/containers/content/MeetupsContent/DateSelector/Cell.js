import React from 'react'
import R from 'ramda'

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

const Cell = ({ item }) => {
  return (
    <Wrapper key={item.id} active={R.contains(item.id, activitiesDates)}>
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
    </Wrapper>
  )
}

export default Cell
