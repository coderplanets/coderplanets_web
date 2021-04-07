import React from 'react'

import { ICON_BASE, ASSETS_ENDPOINT } from '@/config'
import { mockWorks } from '@/utils'

import { ArrowButton } from '@/components/Buttons'
import WorksCard from '@/components/Cards/WorksCard'

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

const item = mockWorks()

const Trending: React.FC = () => {
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
