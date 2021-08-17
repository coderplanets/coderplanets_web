import { FC, Fragment, memo } from 'react'

import { ICON_CMD } from '@/config'
import { mockNaviCatalogTags } from '@/utils/mock'

import Sticky from '@/components/Sticky'
import NaviIntro from '@/components/NaviIntro'
import NaviCatalog from '@/components/NaviCatalog'

import {
  Wrapper,
  Divider,
  TopFilter,
  Option,
  OptionItem,
  // FavoriteIcon,
  ClockIcon,
} from './styles/filter_bar'

import { topFilterOnChange } from './logic'

type TProps = {
  topFilter: string
  menuOnSelect: (id: string, type: string) => void
}

const FilterBar: FC<TProps> = ({ topFilter, menuOnSelect }) => {
  return (
    <Wrapper testid="filter-bar">
      <TopFilter>
        <NaviIntro
          title="酷导航"
          desc="the cool guide"
          iconSrc={`${ICON_CMD}/navi/cool-guide-logo.svg`}
        />
        {topFilter !== 'all' && (
          <Option onClick={() => topFilterOnChange('all')}>全部</Option>
        )}
        {/* <Option
          active={topFilter === 'favorite'}
          onClick={() => topFilterOnChange('favorite')}
        >
          <OptionItem>我的收藏</OptionItem>
          <FavoriteIcon
            src={`${ICON_CMD}/navi/heart.svg`}
            active={topFilter === 'favorite'}
          />
        </Option> */}
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
        <Fragment>
          <NaviCatalog
            title="分类"
            onSelect={(id: string, type: string) => menuOnSelect(id, type)}
            withDivider={false}
            tags={mockNaviCatalogTags()}
          />
        </Fragment>
      </Sticky>
    </Wrapper>
  )
}

export default memo(FilterBar)
