import { FC, memo } from 'react'

import { Wrapper, Header, Icon, Title, Item, MoreLink } from './styles/category'

type TProps = {
  color: string
  title: string
  desc: string
}

const Category: FC<TProps> = ({ color, title, desc }) => {
  return (
    <Wrapper color={color}>
      <Header>
        <Icon />
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
