import { FC, memo } from 'react'

import type { TItem } from './spec'
import { Wrapper, Item } from './styles/wait_list'

type TProps = {
  items: TItem[]
  activeId: string
  setActiveId: (id: string) => void
}

const WaitList: FC<TProps> = ({ items, activeId, setActiveId }) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <Item
          key={item.id}
          active={item.id === activeId}
          onClick={() => setActiveId(item.id)}
        >
          {item.title}
        </Item>
      ))}
    </Wrapper>
  )
}

export default memo(WaitList)
