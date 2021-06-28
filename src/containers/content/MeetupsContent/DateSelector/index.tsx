/*
 *
 * DateSelector
 *
 */

import { FC, memo } from 'react'

import CalendarCard from './CalendarCard'
import Cell from './Cell'

import { Wrapper, CellsWrapper, DatesWrapper } from '../styles/date_selector'

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

const DateSelector: FC = () => {
  fillItems()
  const items = dates
  const isLeapMonth = !!items[30]

  return (
    <Wrapper>
      <CalendarCard />

      <CellsWrapper>
        <DatesWrapper>
          {items.slice(0, 15).map((item) => (
            <Cell key={item.id} item={item} isLeapMonth={isLeapMonth} />
          ))}
        </DatesWrapper>
        <DatesWrapper>
          {items.slice(15).map((item) => (
            <Cell key={item.id} item={item} isLeapMonth={isLeapMonth} />
          ))}
        </DatesWrapper>
      </CellsWrapper>
    </Wrapper>
  )
}

export default memo(DateSelector)
