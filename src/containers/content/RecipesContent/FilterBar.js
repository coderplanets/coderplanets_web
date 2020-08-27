import React from 'react'

import { ICON_CMD } from '@/config'
import { RECIPE } from '@/constant'
import { useTrans } from '@/hooks'

import Sticky from '@/components/Sticky'
import { OrButton } from '@/components/Buttons'
import NaviMenu from '@/components/NaviMenu'
import NaviIntro from '@/components/NaviIntro'

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
  const { t } = useTrans()

  return (
    <Wrapper testId="filter-bar">
      <TopFilter>
        <NaviIntro
          title="代码片段"
          desc="useful recipes"
          iconSrc={`${ICON_CMD}/header/more_snippets.svg`}
          testId="filter-navi-intro"
        />
        {topFilter !== 'all' && (
          <Option onClick={() => topFilterOnChange('all')}>{t('all')}</Option>
        )}
        <Option
          active={topFilter === 'favorite'}
          onClick={() => topFilterOnChange('favorite')}
        >
          <OptionItem>{t('filter:myFavorite')}</OptionItem>
          <FavoriteIcon
            src={`${ICON_CMD}/navi/heart.svg`}
            active={topFilter === 'favorite'}
          />
        </Option>
        <Option
          active={topFilter === 'latest'}
          onClick={() => topFilterOnChange('latest')}
        >
          <OptionItem>{t('filter:latestUpdate')}</OptionItem>
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
        <PinedList />
        <Divider />
        <NaviMenu
          items={tmpMenu}
          onSelect={(id, type) => console.log(id, type)}
          initActiveMenuId={initActiveMenuId}
          withDivider={false}
          showMoreItem
          onShowMore={() => console.log('show more')}
          testId="filter-navi-menu"
        />
      </Sticky>
    </Wrapper>
  )
}

export default FilterBar
