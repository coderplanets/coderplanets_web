import { FC, memo } from 'react'

import { Wrapper, Divider, WeekName, DateNum, Label } from '../styles/card/date'

// type TProps = Omit<TParentProps, 'item'>

const Date: FC = () => {
  return (
    <Wrapper>
      <WeekName>周五</WeekName>
      <Divider />
      <DateNum>18&nbsp;/&nbsp;04</DateNum>
      <Label>前端</Label>
    </Wrapper>
  )
}

export default memo(Date)
