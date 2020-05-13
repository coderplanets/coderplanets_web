import React from 'react'

import { ICON_CMD } from '@/config'

import Sticky from '@/components/Sticky'
import NaviIntro from '@/components/NaviIntro'
import NaviMenu from '@/components/NaviMenu'

import {
  Wrapper,
  Divider,
  TopFilter,
  CatTitle,
  Option,
  OptionItem,
  FavoriteIcon,
  ClockIcon,
} from './styles/filter_bar'
import { topFilterOnChange } from './logic'

const FilterBar = ({ topFilter, menuOnSelect, initActiveMenuId }) => {
  return (
    <Wrapper>
      <TopFilter>
        <NaviIntro
          title="面经"
          desc="面试题库，经验"
          iconSrc={`${ICON_CMD}/header/more_Interview.svg`}
        />
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
      <Sticky offsetTop={30}>
        <React.Fragment>
          <CatTitle>分类</CatTitle>
          <NaviMenu
            onSelect={(id, type) => menuOnSelect(id, type)}
            initActiveMenuId={initActiveMenuId}
            withDivider={false}
          />
        </React.Fragment>
      </Sticky>
    </Wrapper>
  )
}

export default React.memo(FilterBar)
