import React from 'react'

import { Br } from '@/components/Common'
import { OrButton } from '@/components/Buttons'
import FiltersMenu from '@/components/FiltersMenu'
import NaviMenu from '@/components/NaviMenu'

import fakeFilterItems from './fakeFilterItems'
import { Wrapper, Title, FilterWrapper } from './styles/filter_bar'

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
            key: 'works',
            title: '作品',
          },
          {
            key: 'milestone',
            title: '动态',
          },
        ]}
        onClick={changeView}
      />
      <Br bottom="30px" />
      <FilterWrapper>
        <NaviMenu title="类别筛选" joinMode={false} withDivider={false} />
      </FilterWrapper>
      <Br bottom="40px" />
      <Title>高级搜索</Title>
      <FilterWrapper>
        <FiltersMenu items={fakeFilterItems} withDivider revert />
      </FilterWrapper>
    </Wrapper>
  )
}

export default React.memo(FilterBar)
