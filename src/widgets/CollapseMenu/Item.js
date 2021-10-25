import React from 'react'

import { Wrapper, Title } from './styles/item'

// const Item = ({ item, active, activeid, onSelect }) => {
const Item = ({ item, active, onSelect }) => {
  return (
    <Wrapper active={active}>
      <Title active={active} onClick={() => onSelect(item)}>
        {item.title}
      </Title>
    </Wrapper>
  )
}

export default Item
