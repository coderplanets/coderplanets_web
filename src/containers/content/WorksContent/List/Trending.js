import React from 'react'

import { Tabs } from '@/components/Switcher'
import { ArrowButton } from '@/components/Buttons'
import Card from './Card'

import { Wrapper, Header } from '../styles/list/trending'

const items = [
  {
    title: '本月',
    raw: 'month',
  },
  {
    title: '本周',
    raw: 'week',
  },
  {
    title: '今天',
    raw: 'today',
  },
]

const Trending = () => {
  const activeKey = 'month'

  return (
    <Wrapper>
      <Header>
        <Tabs
          items={items}
          activeKey={activeKey}
          onChange={console.log}
          size="small"
        />
        <ArrowButton size="tiny" dimWhenIdle>
          查看全部
        </ArrowButton>
      </Header>
      <Card noBorder />
    </Wrapper>
  )
}

export default Trending
