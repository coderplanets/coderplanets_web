import React, { FC } from 'react'

import type { TProps as TParentProps } from './index'
import { Wrapper, Divider, WeekName, DateNum } from '../styles/card/date'

type TProps = Omit<TParentProps, 'item'>

const Date: FC<TProps> = ({ type }) => {
  return (
    <Wrapper type={type}>
      <WeekName>周五</WeekName>
      <Divider type={type} />
      <DateNum size="small">18&nbsp;/&nbsp;04</DateNum>
    </Wrapper>
  )
}

export default React.memo(Date)
