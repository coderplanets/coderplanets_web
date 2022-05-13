import { FC, memo } from 'react'

import {
  Wrapper,
  Header,
  IconWrapper,
  Icon,
  Title,
  Item,
  MoreLink,
} from './styles/category'

type TProps = {
  color: string
  title: string
  desc: string
  column?: number
}

const Category: FC<TProps> = ({ color, title, desc, column = 2 }) => {
  return (
    <Wrapper color={color} column={column}>
      <Header>
        <IconWrapper>
          <Icon />
        </IconWrapper>
        <Title color={color}>{title}</Title>
      </Header>
      <Item color={color}>{desc}</Item>
      <Item color={color}>{desc}</Item>
      <Item color={color}>{desc}</Item>
      <MoreLink>查看全部</MoreLink>
    </Wrapper>
  )
}

export default memo(Category)
