import { FC, memo } from 'react'

import type { TItem } from './spec'
import {
  Wrapper,
  Header,
  Title,
  JoinWrapper,
  JoinNumber,
  Desc,
} from './styles/spotlight'

type TProps = {
  item: TItem
}

const Spotlight: FC<TProps> = ({ item }) => (
  <Wrapper>
    <Header>
      <Title>{item.title}</Title>
    </Header>
    <Desc>{item.desc}</Desc>
    <JoinWrapper>
      <JoinNumber>58 </JoinNumber>
      人已加入
    </JoinWrapper>
  </Wrapper>
)

export default memo(Spotlight)
