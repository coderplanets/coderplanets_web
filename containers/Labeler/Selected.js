import React from 'react'
import R from 'ramda'

import { Maybe } from '../../components'
import { Wrapper, Item, Hightlight } from './styles/selected'

const renderItems = items => {
  if (items.length === 1) {
    return (
      <Item>
        (<Hightlight>{items[0]}</Hightlight>)
      </Item>
    )
  }
  // {items.map(item => <div key={uid.gen()}>{item}</div>)}
  return (
    <Item>
      (<Hightlight>{items[0]}, ..</Hightlight>)
    </Item>
  )
}

const Selected = ({ items }) => (
  <Maybe test={!R.isEmpty(items)}>
    <Wrapper>{renderItems(items)}</Wrapper>
  </Maybe>
)

export default Selected
