import React from 'react'

import NaviMenu from '@components/NaviMenu'
import { Wrapper, Divider, TopFilter, Title, Option } from './styles/filter_bar'
import { topFilterOnChange } from './logic'

const FilterBar = ({ topFilter, menuOnSelect, initActiveMenuId }) => {
  return (
    <Wrapper>
      <TopFilter>
        <Title>酷导游</Title>
        {topFilter !== 'all' && (
          <Option onClick={() => topFilterOnChange('all')}>全部</Option>
        )}
        <Option
          active={topFilter === 'favorite'}
          onClick={() => topFilterOnChange('favorite')}
        >
          我的收藏
        </Option>
        <Option
          active={topFilter === 'latest'}
          onClick={() => topFilterOnChange('latest')}
        >
          最近更新
        </Option>
      </TopFilter>
      <Divider />
      <Title>分类</Title>
      <NaviMenu
        onSelect={(id, type) => menuOnSelect(id, type)}
        initActiveMenuId={initActiveMenuId}
        withDivider={false}
      />
    </Wrapper>
  )
}

export default FilterBar
