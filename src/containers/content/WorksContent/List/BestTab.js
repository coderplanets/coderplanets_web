import React from 'react'

import { Wrapper, ItemWrapper, Text } from '../styles/list/best_tab'

const BestTab = ({ items, activeKey }) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <ItemWrapper key={item.key} active={item.raw === activeKey}>
          <Text active={item.raw === activeKey}>{item.title}</Text>
        </ItemWrapper>
      ))}
    </Wrapper>
  )
}

export default React.memo(BestTab)
