import React from 'react'

import { ICON_BASE, ASSETS_ENDPOINT } from '@/config'

import { Br } from '@/components/Common'
import WorksCard from '@/components/WorksCard'

import { LAUNCH } from '../constant'

import Trending from './Trending'
import OptionTab from './OptionTab'

import { Wrapper, TabWrapper } from '../styles/list'

const options = [
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

const item = {
  cover: `${ASSETS_ENDPOINT}/works/market1.jpeg`,
  title: 'coderplanets',
  desc: '可能是最性感的开发者社区',
  tag: {
    title: '协作工具',
  },
  platform: {
    title: '网站',
  },
  techStack: [
    {
      raw: 'javascript',
      icon: `${ICON_BASE}/pl/javascript.svg`,
    },
    {
      raw: 'java',
      icon: `${ICON_BASE}/pl/java.svg`,
    },
    {
      raw: 'elixir',
      icon: `${ICON_BASE}/pl/elxiir.svg`,
    },
    {
      raw: 'ruby',
      icon: `${ICON_BASE}/pl/ruby.svg`,
    },
  ],
  upvote: 99,
  commentsCount: 99,
  insertedAt: '3天前',
  isOpenSource: true,
}

const lists = [
  { ...item, id: 1 },
  { ...item, id: 2 },
  { ...item, id: 3 },
  { ...item, id: 4 },
  { ...item, id: 5 },
  { ...item, id: 6 },
  { ...item, id: 7 },
]

const List = () => {
  return (
    <Wrapper>
      <Trending />
      <Br top={15} />
      <TabWrapper>
        <OptionTab items={options} activeKey="all" />
      </TabWrapper>
      {lists.map((item) => (
        <WorksCard key={item.id} item={item} />
      ))}
    </Wrapper>
  )
}

export default List
