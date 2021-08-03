import { FC } from 'react'

import { mockWorks } from '@/utils/mock'
// import { Br } from '@/components/Common'
import WorksCard from '@/components/Cards/WorksCard'

import { LAUNCH } from '../constant'
// import Trending from './Trending'
import OptionTab from './OptionTab'

import { Wrapper, TabWrapper } from '../styles/list'

const options = [
  {
    title: '作品',
    raw: LAUNCH.ALL,
  },
  {
    title: '讨论',
    raw: LAUNCH.PUBLISHED,
  },
  {
    title: '创作者',
    raw: LAUNCH.PRE_PUBLISH,
  },
  {
    title: '里程碑',
    raw: LAUNCH.PRE_PUBLISH,
  },
]

const item = mockWorks()

const lists = [
  { ...item, id: 1 },
  { ...item, id: 2 },
  { ...item, id: 3 },
  { ...item, id: 4 },
  { ...item, id: 5 },
  { ...item, id: 6 },
  { ...item, id: 7 },
]

const List: FC = () => {
  return (
    <Wrapper>
      {/* <Trending /> */}
      {/* <Br top={15} /> */}
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
