import React from 'react'

import {
  Wrapper,
  DateInfo,
  DayNum,
  MonthNum,
  Divider,
  Desc,
} from '../styles/activities/brief_info'

const BriefInfo = ({ first }) => {
  return (
    <Wrapper first={first}>
      <DateInfo>
        <DayNum>03</DayNum>
        <Divider>/</Divider>
        <MonthNum>5月</MonthNum>
      </DateInfo>
      <Desc>讨论了帖子</Desc>
    </Wrapper>
  )
}

export default React.memo(BriefInfo)
