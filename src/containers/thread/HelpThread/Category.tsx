import { FC, memo } from 'react'

import { Wrapper, Title, Item } from './styles/category'

type TProps = {
  color: string
  title: string
  desc: string
}

const Category: FC<TProps> = ({ color, title, desc }) => {
  return (
    <Wrapper color={color}>
      <Title color={color}>{title}</Title>
      <Item color={color}>{desc}</Item>
      <Item color={color}>{desc}</Item>
      <Item color={color}>{desc}</Item>
    </Wrapper>
  )
}

export default memo(Category)
