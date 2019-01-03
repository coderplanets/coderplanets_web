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
  const itemsLength = items.length

  if (itemsLength === 1) {
    return (
      <Item>
        <Hightlight>{Trans(items[0])}</Hightlight>
      </Item>
    )
  }

  return (
    <Item>
      {items
        .slice(0, itemsLength - 1)
        .map(item => <Hightlight key={uid.gen()}>{Trans(item)}, </Hightlight>)}

      <Hightlight>{Trans(items[itemsLength - 1])}</Hightlight>
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
