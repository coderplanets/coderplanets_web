import React from 'react'

import { ArrowButton } from '@/components/Buttons'

import { BEST } from '../constant'

import OptionTab from './OptionTab'
import Card from './Card'

import { Wrapper, Header, More } from '../styles/list/trending'

const items = [
  {
    title: '月最佳',
    raw: BEST.MONTH,
  },
  {
    title: '周最佳',
    raw: BEST.WEEK,
  },
]

const Trending = () => {
  const activeKey = 'month'

  return (
    <Wrapper>
      <Header>
        <OptionTab items={items} activeKey={activeKey} />
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
