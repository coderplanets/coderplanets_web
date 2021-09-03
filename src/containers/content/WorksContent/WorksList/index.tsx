import { FC, memo } from 'react'

import { ICON } from '@/config'
import type { TPagedWorks } from '@/spec'

import WorksCard from '@/components/Cards/WorksCard'
import IconText from '@/components/IconText'
import MenuButton from '@/components/Buttons/MenuButton'

import { LAUNCH } from '../constant'
import OptionTab from './OptionTab'

import { Wrapper, TabWrapper, FilterWrapper } from '../styles/works_list'
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

type TProps = {
  data: TPagedWorks
}

const WorksList: FC<TProps> = ({ data }) => {
  const { entries } = data

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
      {entries.map((item) => (
        <WorksCard key={item.id} item={item} />
      ))}
    </Wrapper>
  )
}

export default memo(WorksList)
