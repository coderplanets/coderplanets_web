import React from 'react'

import { ICON_BASE, ASSETS_ENDPOINT } from '@/config'

import { ArrowButton } from '@/components/Buttons'
import WorksCard from '@/components/WorksCard'

import { BEST } from '../constant'

import OptionTab from './OptionTab'

import { Wrapper, Header, More } from '../styles/list/trending'

const options = [
  {
    title: '月最佳',
    raw: BEST.MONTH,
  },
  {
    title: '周最佳',
    raw: BEST.WEEK,
  },
]

const item = {
  cover: `${ASSETS_ENDPOINT}/works/market1.jpeg`,
  title: 'coderplanets',
  desc: '作品简介',
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
  insertedAt: '',
  isOpenSource: true,
}

const Trending = () => {
  const activeKey = 'month'

  return (
    <Wrapper>
      <Header>
        <OptionTab items={options} activeKey={activeKey} />
        <More>
          <ArrowButton size="tiny" dimWhenIdle>
            全部榜单
          </ArrowButton>
        </More>
      </Header>
      <WorksCard item={item} withBg />
    </Wrapper>
  )
}

export default Trending
