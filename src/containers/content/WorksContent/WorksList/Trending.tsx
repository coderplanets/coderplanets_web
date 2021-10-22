import { FC } from 'react'

import { mockWorks } from '@/utils/mock'

import ArrowButton from '@/widgets/Buttons/ArrowButton'
import WorksCard from '@/widgets/Cards/WorksCard'

import { BEST } from '../constant'

import OptionTab from './OptionTab'

import { Wrapper, Header, More } from '../styles/works_list/trending'

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

const Trending: FC = () => {
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
      <WorksCard item={item} preview />
    </Wrapper>
  )
}

export default Trending
