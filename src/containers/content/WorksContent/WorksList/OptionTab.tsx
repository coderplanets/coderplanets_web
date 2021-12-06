import { FC, memo } from 'react'

import { Wrapper, ItemWrapper, Text } from '../styles/works_list/option_tab'

import { changeView } from '../logic'

type TProps = {
  activeKey: string
  items: {
    title: string
    raw: string
  }[]
}

const BestTab: FC<TProps> = ({ items, activeKey }) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <ItemWrapper
          key={item.raw}
          active={item.raw === activeKey}
          onClick={() => changeView(item.raw)}
        >
          <Text active={item.raw === activeKey}>{item.title}</Text>
        </ItemWrapper>
      ))}
    </Wrapper>
  )
}

export default memo(BestTab)
