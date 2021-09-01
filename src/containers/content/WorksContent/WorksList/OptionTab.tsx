import { FC, memo } from 'react'

import { Wrapper, ItemWrapper, Text } from '../styles/list/option_tab'

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
        <ItemWrapper key={item.raw} active={item.raw === activeKey}>
          <Text active={item.raw === activeKey}>{item.title}</Text>
        </ItemWrapper>
      ))}
    </Wrapper>
  )
}

export default memo(BestTab)
