import React from 'react'

import { Br } from '@/components/Common'
import { OrButton } from '@/components/Buttons'
import FiltersMenu from '@/components/FiltersMenu'
import NaviMenu from '@/components/NaviMenu'
import SideFooter from './SideFooter'

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
      <Title>综合筛选</Title>
      <FilterWrapper>
        <FiltersMenu items={fakeFilterItems} withDivider revert />
      </FilterWrapper>
      <Br bottom="30px" />
      <Title>类别筛选</Title>
      <FilterWrapper>
        <NaviMenu joinMode={false} withDivider={false} />
      </FilterWrapper>
      <SideFooter />
    </Wrapper>
  )
}

export default React.memo(FilterBar)
