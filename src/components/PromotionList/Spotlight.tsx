import React, { FC } from 'react'

import type { TItem } from './spec'
import {
  Wrapper,
  ItemWrapper,
  Header,
  Logo,
  Title,
  Desc,
} from './styles/spotlight'

type TProps = {
  item: TItem
}

const Spotlight: FC<TProps> = ({ item }) => (
  <Wrapper>
    <ItemWrapper>
      <Header>
        <Title>{item.title}</Title>
        <Logo src={item.cover} />
      </Header>
      <Desc>{item.desc}</Desc>
    </ItemWrapper>
  </Wrapper>
)

export default React.memo(Spotlight)
