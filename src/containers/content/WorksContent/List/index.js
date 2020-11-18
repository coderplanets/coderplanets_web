import React from 'react'

import { Br } from '@/components/Common'

import { LAUNCH } from '../constant'

import Trending from './Trending'
import OptionTab from './OptionTab'
import Card from './Card'

import { Wrapper, TabWrapper } from '../styles/list'

const items = [
  {
    title: '全部',
    raw: LAUNCH.ALL,
  },
  {
    title: '已发布',
    raw: LAUNCH.PUBLISHED,
  },
  {
    title: '预发布',
    raw: LAUNCH.PRE_PUBLISH,
  },
]

const List = () => {
  return (
    <Wrapper>
      <Trending />
      <Br top={15} />
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
