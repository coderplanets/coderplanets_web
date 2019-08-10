import React from 'react'
import R from 'ramda'

import { uid, Trans, nilOrEmpty } from '@utils'
import { Wrapper, Item, SlashDivider } from './styles/city_list'

const CityList = ({ data }) => {
  const items = R.pluck('title', data)
  if (nilOrEmpty(items)) return null
  const itemsLength = items.length

  if (itemsLength === 1) {
    return <Item>{Trans(items[0])}</Item>
  }

  return (
    <Wrapper>
      {items.slice(0, itemsLength - 1).map(item => (
        <Item key={uid.gen()}>
          {Trans(item)}
          <SlashDivider>/</SlashDivider>{' '}
        </Item>
      ))}

      <Item>{Trans(items[itemsLength - 1])}</Item>
    </Wrapper>
  )
}

export default CityList
