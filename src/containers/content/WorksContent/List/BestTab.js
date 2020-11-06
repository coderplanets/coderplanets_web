import React from 'react'

import { ICON } from '@/config'
import { Wrapper, ItemWrapper, Icon, Text } from '../styles/list/best_tab'

const BestTab = ({ items, activeKey }) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <ItemWrapper key={item.key}>
          <Icon
            src={`${ICON}/shape/crown.svg`}
            active={item.raw === activeKey}
          />
          <Text active={item.raw === activeKey}>{item.title}</Text>
        </ItemWrapper>
      ))}
    </Wrapper>
  )
}

export default React.memo(BestTab)
