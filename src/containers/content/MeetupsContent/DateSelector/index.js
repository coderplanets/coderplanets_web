/*
 *
 * DateSelector
 *
 */

import React from 'react'

import Cell from './Cell'

import { Wrapper, DatesWrapper } from '../styles/date_selector'

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

  return (
    <Wrapper>
      <DatesWrapper>
        {items.slice(0, 15).map(item => (
          <Cell key={item.id} item={item} />
        ))}
      </DatesWrapper>
      <DatesWrapper>
        {items.slice(15).map(item => (
          <Cell key={item.id} item={item} />
        ))}
      </DatesWrapper>
    </Wrapper>
  )
}

export default React.memo(DateSelector)
