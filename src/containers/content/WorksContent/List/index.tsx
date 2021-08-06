import { FC } from 'react'

import { ICON } from '@/config'
import { mockWorks } from '@/utils/mock'
// import { Br } from '@/components/Common'
import WorksCard from '@/components/Cards/WorksCard'
import IconText from '@/components/IconText'
import MenuButton from '@/components/Buttons/MenuButton'

import { LAUNCH } from '../constant'
import OptionTab from './OptionTab'

import { Wrapper, TabWrapper, FilterWrapper } from '../styles/list'
import { toggleSidebar } from '../logic'

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

const menuOptions = [
  {
    key: 'time',
    icon: `${ICON}/article/comment-timeline-mode.svg`,
    title: '最新发布',
  },
  {
    key: 'hot',
    icon: `${ICON}/menu/hot.svg`,
    title: '热度优先',
  },
]

const extraOptions = [
  {
    key: 'type',
    icon: `${ICON}/article/tag.svg`,
    title: '标签分类',
  },
]

const item = mockWorks()

const lists = [
  { ...item, id: '1' },
  { ...item, id: '2' },
  { ...item, id: '3' },
  { ...item, id: '4' },
  { ...item, id: '5' },
  { ...item, id: '6' },
  { ...item, id: '7' },
]

const List: FC = () => {
  return (
    <Wrapper>
      <TabWrapper>
        <OptionTab items={options} activeKey="all" />

        <FilterWrapper>
          <MenuButton
            options={menuOptions}
            extraOptions={extraOptions}
            onClick={() => toggleSidebar()}
          >
            <IconText iconSrc={`${ICON}/filter.svg`} dimWhenIdle>
              默认排序
            </IconText>
          </MenuButton>
        </FilterWrapper>
      </TabWrapper>
      {lists.map((item) => (
        <WorksCard key={item.id} item={item} />
      ))}
    </Wrapper>
  )
}

export default List
