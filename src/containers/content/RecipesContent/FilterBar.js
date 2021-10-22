import React from 'react'

import { ICON_CMD } from '@/config'
import { RECIPE } from '@/constant'

import Sticky from '@/widgets/Sticky'
import OrButton from '@/widgets/Buttons/OrButton'
import NaviCatalog from '@/widgets/NaviCatalog'
import NaviIntro from '@/widgets/NaviIntro'

import SearchBox from './SearchBox'
import tmpMenu from './tempData'

import {
  Wrapper,
  Divider,
  TopFilter,
  Option,
  OptionItem,
  FavoriteIcon,
  ClockIcon,
  OrWrapper,
} from './styles/filter_bar'

import { topFilterOnChange, mainViewOnChange } from './logic'

const FilterBar = ({ mainView, topFilter, initActiveMenuId }) => {
  return (
    <Wrapper testid="filter-bar">
      <TopFilter>
        <NaviIntro
          title="代码片段"
          desc="useful recipes"
          iconSrc={`${ICON_CMD}/header/more_snippets.svg`}
          testid="filter-navi-intro"
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
          <OptionItem>最新</OptionItem>
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
          activeKey={mainView}
          group={[
            {
              key: RECIPE.SNIPPETS_VIEW,
              title: '片段',
            },
            {
              key: RECIPE.CHEATSHEETS_VIEW,
              title: '速查表',
            },
          ]}
          onClick={mainViewOnChange}
        />
      </OrWrapper>

      <SearchBox />
      <Sticky offsetTop={20}>
        <NaviCatalog
          testid="filter-navi-menu"
          items={tmpMenu}
          onSelect={(id, type) => console.log(id, type)}
          initActiveMenuId={initActiveMenuId}
          onShowMore={() => console.log('show more')}
          showItemTotal
          showMoreItem
        />
      </Sticky>
    </Wrapper>
  )
}

export default FilterBar
