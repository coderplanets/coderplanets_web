import React from 'react'

import { ArrowButton } from '@/components/Buttons'

import BestTab from './BestTab'
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
]

const Trending = () => {
  const activeKey = 'month'

  return (
    <Wrapper>
      <Header>
        <BestTab items={items} activeKey={activeKey} />
        {/* <Tabs
          items={items}
          activeKey={activeKey}
          onChange={console.log}
          size="small"
        /> */}
        <More>
          <ArrowButton size="tiny" dimWhenIdle>
            全部榜单
          </ArrowButton>
        </More>
      </Header>
      <Card withBg />
    </Wrapper>
  )
}

export default Trending
