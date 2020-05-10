import React from 'react'

import { ICON_CMD } from '@config'
import { SNIPPET } from '@constant'

import Sticky from '@components/Sticky'
import { OrButton } from '@components/Buttons'
import NaviMenu from '@components/NaviMenu'
import NaviIntro from '@components/NaviIntro'

import SearchBox from './SearchBox'
import PinedList from './PinedList'
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
    <Wrapper>
      <TopFilter>
        <NaviIntro
          title="代码片段"
          desc="useful snippets"
          iconSrc={`${ICON_CMD}/header/more_snippets.svg`}
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
      <OrWrapper>
        <OrButton
          size="small"
          type="primary"
          activeKey={mainView}
          group={[
            {
              key: SNIPPET.SNIPPETS_VIEW,
              title: '片段',
            },
            {
              key: SNIPPET.CHEATSHEETS_VIEW,
              title: '速查表',
            },
          ]}
          onClick={mainViewOnChange}
        />
      </OrWrapper>

      <SearchBox />
      <Sticky offsetTop={20}>
        <PinedList />
        <Divider />
        <NaviMenu
          items={tmpMenu}
          onSelect={(id, type) => console.log(id, type)}
          initActiveMenuId={initActiveMenuId}
          withDivider={false}
          showMoreItem
          onShowMore={() => console.log('show more')}
        />
      </Sticky>
    </Wrapper>
  )
}

export default FilterBar
