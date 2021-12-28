import { FC, memo, Fragment } from 'react'
import { isMobile } from 'react-device-detect'

import { ICON } from '@/config'
import type { TPagedWorks } from '@/spec'

import WorksCard from '@/widgets/Cards/WorksCard'
import IconText from '@/widgets/IconText'
import MenuButton from '@/widgets/Buttons/MenuButton'

import WipThread from '@/containers/content/CommunityContent/WipThread'

import { VIEW } from '../constant'
import OptionTab from './OptionTab'

import { Wrapper, TabWrapper, FilterWrapper } from '../styles/works_list'
import { toggleSidebar, onPreview } from '../logic'

const options = [
  {
    title: '作品',
    raw: VIEW.WORKS,
  },
  {
    title: '讨论',
    raw: VIEW.DISCUSS,
  },
  {
    title: '创作者',
    raw: VIEW.MAKERS,
  },
  {
    title: '里程碑',
    raw: VIEW.RELEASE,
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
  activeView: string
}

const WorksList: FC<TProps> = ({ data, activeView }) => {
  const { entries } = data

  return (
    <Wrapper>
      <TabWrapper>
        <OptionTab items={options} activeKey={activeView} />
        {!isMobile && (
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
        )}
      </TabWrapper>

      {activeView === VIEW.WORKS && (
        <Fragment>
          {entries.map((item) => (
            <WorksCard key={item.id} item={item} onPreview={onPreview} />
          ))}
        </Fragment>
      )}

      {activeView === VIEW.DISCUSS && <WipThread title="讨论" />}
      {activeView === VIEW.MAKERS && <WipThread title="创作者" />}
      {activeView === VIEW.RELEASE && <WipThread title="里程碑" />}
    </Wrapper>
  )
}

export default memo(WorksList)
