import React from 'react'

import type { TItem } from './spec'
import { Wrapper, Item } from './styles/wait_list'

type TProps = {
  items: TItem[]
  activeId: string
}

const WaitList: React.FC<TProps> = ({ items, activeId }) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <Item key={item.id} active={item.id === activeId}>
          {item.title}
        </Item>
      ))}
    </Wrapper>
  )
}

export default React.memo(WaitList)
