import React from 'react'

import { OrButton } from '@components/Buttons'
import FiltersMenu from '@components/FiltersMenu'
import NaviMenu from '@components/NaviMenu'

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
      <br />
      <Title>综合筛选</Title>
      <FilterWrapper>
        <FiltersMenu items={fakeFilterItems} withDivider revert />
      </FilterWrapper>
      <br />
      <br />
      <Title>类别筛选</Title>
      <FilterWrapper>
        <NaviMenu joinMode={false} withDivider={false} />
      </FilterWrapper>
    </Wrapper>
  )
}

export default FilterBar
