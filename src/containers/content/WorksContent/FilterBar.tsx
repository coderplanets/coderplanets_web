import React from 'react'

import { mockNaviCatalogMenu } from '@/utils'

import { Br } from '@/components/Common'
import { OrButton } from '@/components/Buttons'
import FiltersMenu from '@/components/FiltersMenu'
import NaviCatalog from '@/components/NaviCatalog'

import { VIEW } from './constant'

import fakeFilterItems from './fakeFilterItems'
import { Wrapper, FilterWrapper } from './styles/filter_bar'

import { changeView } from './logic'

type TProps = {
  activeView: string
}

const FilterBar: React.FC<TProps> = ({ activeView }) => {
  return (
    <Wrapper>
      <OrButton
        size="small"
        activeKey={activeView}
        group={[
          {
            key: VIEW.WORKS,
            title: '作品',
          },
          {
            key: VIEW.MILESTONE,
            title: '动态', // 里面再成 里程碑，和讨论
          },
        ]}
        onClick={changeView}
      />
      <Br bottom={30} />
      <FilterWrapper>
        <NaviCatalog
          title="类别筛选"
          withDivider={false}
          items={mockNaviCatalogMenu()}
        />
      </FilterWrapper>
      <Br bottom={40} />
      <FilterWrapper>
        <FiltersMenu
          title="高级搜索"
          items={fakeFilterItems}
          withDivider
          revert
        />
      </FilterWrapper>
    </Wrapper>
  )
}

export default React.memo(FilterBar)
