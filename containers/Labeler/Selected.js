import React from 'react'
import R from 'ramda'

import { Maybe } from '../../components'
import { Wrapper, Item, Hightlight } from './styles/selected'
import { uid, Trans } from '../../utils'

const renderItems = items => {
  if (!items) return null

  switch (items.length) {
    case 1: {
      return (
        <Item>
          (<Hightlight>{Trans(items[0])}</Hightlight>)
        </Item>
      )
    }
    case 2: {
      return (
        <Item>
          (
          <Hightlight>
            {Trans(items[0])}, {Trans(items[1])}
          </Hightlight>
          )
        </Item>
      )
    }
    default: {
      return (
        <Item>
          (<Hightlight>{Trans(items[0])}, ..</Hightlight>)
        </Item>
      )
    }
  }
}

const renderReadonlyItems = items => {
  if (!items) return null

  if (items.length === 1) {
    return (
      <Item>
        <Hightlight>{Trans(items[0])}</Hightlight>
      </Item>
    )
  }

  return (
    <Item>
      {items.map(item => (
        <Hightlight key={uid.gen()}>{Trans(item)}</Hightlight>
      ))}
    </Item>
  )
}

const Selected = ({ items, readonly }) => (
  <Maybe test={!R.isEmpty(items)}>
    <Maybe test={!readonly}>
      <Wrapper>{renderItems(items)}</Wrapper>
    </Maybe>
    <Maybe test={readonly}>
      <Wrapper>{renderReadonlyItems(items)}</Wrapper>
    </Maybe>
  </Maybe>
)

export default Selected
