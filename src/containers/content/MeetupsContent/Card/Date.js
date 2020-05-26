import React from 'react'

import { Wrapper, Divider, WeekName, DateNum } from '../styles/card/date'

const Date = () => {
  return (
    <Wrapper>
      <WeekName>周五</WeekName>
      <Divider />
      <DateNum>18</DateNum>
    </Wrapper>
  )
}

export default React.memo(Date)
