import React from 'react'

import { OrButton } from '@components/Buttons'
import FiltersMenu from '@components/FiltersMenu'
import NaviMenu from '@components/NaviMenu'

import fakeFilterItems from './fakeFilterItems'

import { Wrapper, Title } from './styles/filter_bar'

const FilterBar = () => {
  return (
    <Wrapper>
      <OrButton size="small" type="primary">
        列表 OR 里程碑
      </OrButton>
      <br />
      <Title>综合筛选</Title>
      <FiltersMenu items={fakeFilterItems} />
      <br />
      <br />
      <Title>类别筛选</Title>
      <NaviMenu />
    </Wrapper>
  )
}

export default FilterBar
