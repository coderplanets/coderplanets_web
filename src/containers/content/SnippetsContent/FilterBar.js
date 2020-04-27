import React from 'react'

import { ICON_CMD } from '@config'

import { OrButton } from '@components/Buttons'
import NaviMenu from '@components/NaviMenu'

import SearchBox from './SearchBox'
import tmpMenu from './tempData'

import {
  Wrapper,
  Divider,
  TopFilter,
  Title,
  Option,
  OptionItem,
  FavoriteIcon,
  ClockIcon,
  OrWrapper,
} from './styles/filter_bar'
import { topFilterOnChange } from './logic'

const FilterBar = ({ topFilter, menuOnSelect, initActiveMenuId }) => {
  return (
    <Wrapper>
      <TopFilter>
        <Title>代码片段</Title>
        {topFilter !== 'all' && (
          <Option onClick={() => topFilterOnChange('all')}>全部</Option>
        )}
        <Option
          active={topFilter === 'favorite'}
          onClick={() => topFilterOnChange('favorite')}
        >
          <OptionItem>我的收藏</OptionItem>
          <FavoriteIcon
            src={`${ICON_CMD}/navi/heart.svg`}
            active={topFilter === 'favorite'}
          />
        </Option>
        <Option
          active={topFilter === 'latest'}
          onClick={() => topFilterOnChange('latest')}
        >
          <OptionItem>最近更新</OptionItem>
          <ClockIcon
            src={`${ICON_CMD}/navi/clock-solid.svg`}
            active={topFilter === 'latest'}
          />
        </Option>
      </TopFilter>
      <Divider />
      <OrWrapper>
        <OrButton
          size="small"
          type="primary"
          activeKey="snippets"
          group={[
            {
              key: 'snippets',
              title: '片段',
            },
            {
              key: 'cheatsheet',
              title: '速查表',
            },
          ]}
          onClick={console.log}
        />
      </OrWrapper>
      <SearchBox />
      <NaviMenu
        items={tmpMenu}
        onSelect={(id, type) => menuOnSelect(id, type)}
        initActiveMenuId={initActiveMenuId}
        withDivider={false}
        showMoreItem
        onShowMore={() => console.log('show more')}
      />
    </Wrapper>
  )
}

export default FilterBar
