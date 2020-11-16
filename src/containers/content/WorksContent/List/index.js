import React from 'react'

import { Br } from '@/components/Common'
import Trending from './Trending'
import Card from './Card'
import { Wrapper } from '../styles/list'

const List = () => {
  return (
    <Wrapper>
      <Trending />
      <Br top="15px" />
      <Card />
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
