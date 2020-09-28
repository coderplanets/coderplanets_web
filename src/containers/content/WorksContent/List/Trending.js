import React from 'react'

import { Tabs } from '@/components/Switcher'
import { ArrowButton } from '@/components/Buttons'
import Card from './Card'

import { Wrapper, Header, More } from '../styles/list/trending'

const items = [
  {
    title: '月最佳',
    raw: 'month',
  },
  {
    title: '周最佳',
    raw: 'week',
  },
  {
    title: '日最佳',
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
        <More>
          <ArrowButton size="tiny" dimWhenIdle>
            全部榜单
          </ArrowButton>
        </More>
      </Header>
      <Card noBorder />
    </Wrapper>
  )
}

export default Trending
