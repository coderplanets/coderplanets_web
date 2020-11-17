import React from 'react'

import { Br } from '@/components/Common'

import Trending from './Trending'
import OptionTab from './OptionTab'
import Card from './Card'

import { Wrapper, TabWrapper } from '../styles/list'

const items = [
  {
    title: '全部',
    raw: 'all',
  },
  {
    title: '已发布',
    raw: 'published',
  },
  {
    title: '预发布',
    raw: 'prePublish',
  },
]

const List = () => {
  return (
    <Wrapper>
      <Trending />
      <Br top="15px" />
      <TabWrapper>
        <OptionTab items={items} activeKey="all" />
      </TabWrapper>
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
