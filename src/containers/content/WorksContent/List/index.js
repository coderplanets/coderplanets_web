import React from 'react'

import Trending from './Trending'
import Card from './Card'
import { Wrapper, Divider } from '../styles/list'

const List = () => {
  return (
    <Wrapper>
      <Trending />
      <Divider />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Wrapper>
  )
}

export default List
