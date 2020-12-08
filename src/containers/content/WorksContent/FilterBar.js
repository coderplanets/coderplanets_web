import React from 'react'

import { Br } from '@/components/Common'
import { OrButton } from '@/components/Buttons'
import FiltersMenu from '@/components/FiltersMenu'
import NaviCatalog from '@/components/NaviCatalog'

import { VIEW } from './constant'

import fakeFilterItems from './fakeFilterItems'
import { Wrapper, FilterWrapper } from './styles/filter_bar'

import { changeView } from './logic'

const FilterBar = ({ activeView }) => {
  return (
    <Wrapper>
      <OrButton
        size="small"
        type="primary"
        activeKey={activeView}
        group={[
          {
            key: VIEW.WORKS,
            title: '作品',
          },
          {
            key: VIEW.MILESTONE,
            title: '动态',
          },
        ]}
        onClick={changeView}
      />
      <Br bottom={30} />
      <FilterWrapper>
        <NaviCatalog title="类别筛选" withDivider={false} />
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
